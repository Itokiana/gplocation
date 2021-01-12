require 'time'
class VoituresController < ApplicationController
    before_action :set_voiture, only: [:show, :update, :destroy]
    # before_action :authorized, only: [:create]
    # before_action :set_category
    # before_action :set_category_voiture, only: [:show, :update, :destroy]

    # GET /categories/:category_id/voitures
    # GET /voitures
    def index
        @voitures = Voiture.all
        json_response(@voitures)
    end

    #GET /voitures/:dateDepart/:dateRetour/:jours
    def listevoiture
        # recuperation params
        data = JSON.parse(params[:values])
        # conversion date de depart et retour en datetime
        @dateDepart = Date.strptime(data["dateDepart"], '%Y-%m-%d')
        @dateRetour = Date.strptime(data["dateRetour"], '%Y-%m-%d')
        @message = ""

        # test si la date de depart est superieur à la date retour donc il y a erreur
        if @dateDepart > @dateRetour
            @message = "La date de depart devrait être inferieur à la date de retour."
            render json: {voitures:{},prix:[],message:@message}
        else
            # check si la date de depart et retour sont des jours de fermeture exceptionnels ou pas
            @fermeexceptiondepart = Fermexception.find_by('jourfermedebut <= ? AND jourfermefin >= ?',@dateDepart,@dateDepart)
        
            @fermeexceptionretour = Fermexception.find_by('jourfermedebut <= ? AND jourfermefin >= ?',@dateRetour,@dateRetour)
        
            @prix=[]
            @voiture_dispo = []
            # si c'est pas un jour de fermeture exceptionnel donc recuperer la liste des voitures et prix
            if @fermeexceptiondepart.nil? && @fermeexceptionretour.nil?
               
                @voitures = Voiture.all

                @voitures.each do |voiture|
                    # check la disponibilité de la voiture si c'est deja reserver pour cette date
                    @disponibility = Reservation.find_by('voiture_id = ? AND ((date_depart <= ? AND date_retour >= ?) OR (date_depart <= ? AND date_retour >= ?))',voiture.id, @dateDepart,@dateDepart,@dateRetour,@dateRetour)
                    # si c'est disponnible et le stock n'est pas vide donc recuperer les prix et ajouter la voiture dans la liste des voiture dispo
                    if @disponibility.nil? && voiture.category.stock >= 1 
                        # ajout voiture dans la liste des voitures disponible
                       
                        # verifier s'il y a un tarif perso sur cette periode
                        @ligne1 = voiture.category.tarif_personalises.select(:prix).find_by("datedebutperso <= ? AND datefinperso >= ? AND jourdebut <= ? AND jourfin >= ?",@dateDepart,@dateRetour,params[:jours].to_i,params[:jours].to_i)
                        
                        # s'il n y pas donc recuper la tarif de base pour la categorie de cette voiture
                        if @ligne1.nil? || @ligne1.prix == -1
                            if voiture.getPrixBase(params[:jours],@dateDepart,@dateRetour)*(params[:jours]).to_f != 0
                                @prix.push(voiture.getPrixBase(params[:jours],@dateDepart,@dateRetour)*(params[:jours]).to_f)
                                @voiture_dispo.push(voiture)
                            end
                        # s' il y a donc recuper la tarif personnaliser
                        else
                            @prix.push((@ligne1.prix) * (params[:jours]).to_f)
                            @voiture_dispo.push(voiture)
                        end
                    end
                end
                if @prix == []
                    @message = "Le nombre de jours de votre location est inférieur à la minimale"
                end

                # check dans la base si l'horraire entrer par l'utisisateur et non ouvrable donc il y a du surplus
                @checkhorraireD = HoraireJour.find_by('nomjour = ? AND heuredebut <= ? AND heurefin >= ?',checkJour(@dateDepart.wday),data["heureDepart"],data["heureDepart"])
                @checkhorraireR = HoraireJour.find_by('nomjour = ? AND heuredebut <= ? AND heurefin >= ?',checkJour(@dateRetour.wday),data["heureRetour"],data["heureRetour"])
                # ajout prix surplus si l'heure de depart et dans le surplus horraire
                unless @checkhorraireD.nil?
                    @prix = @prix.map { |prix| prix + @checkhorraireD.prixsurplus}
                end
                # ajout prix surplus si l'heure de retour et dans le surplus horraire
                unless @checkhorraireR.nil?
                    @prix = @prix.map { |prix| prix + @checkhorraireR.prixsurplus}
                end
                # 
                # check si les jours entrer par l'utilisateur sont des jours ferier
                @jourferierD = Jourferier.find_by('dateferie = ? ',@dateDepart)
                @jourferierR = Jourferier.find_by('dateferie = ? ',@dateRetour)
                # ajout prix surplus si le jours de depart et un jour ferier
                unless @jourferierD.nil?
                    @prix = @prix.map { |prix| prix + @jourferierD.surplus}
                end
                # ajout prix surplus si le jours de retour et un jour ferier
                unless @jourferierR.nil?
                    @prix = @prix.map { |prix| prix + @jourferierR.surplus}
                end
            else
                if @fermeexceptiondepart.nil? == false && @fermeexceptionretour.nil? == false
                    @message = "les deux dates que vous avez choisi sont tous des jours de fermetures exceptionnels"
                elsif  @fermeexceptionretour.nil? == false && @fermeexceptiondepart.nil?
                    @message = "La date retour est une jour fermeture exceptionnel, choisir une autre s'il vous plaît"
                elsif @fermeexceptiondepart.nil? == false && @fermeexceptionretour.nil?
                    @message = "La date depart est une jour fermeture exceptionnel, choisir une autre s'il vous plaît"
                else
                end
            end

            if @message!=""
                render json: {voitures:{},prix:[],message:@message}
            else
                render json: {voitures:@voiture_dispo,prix:@prix,message:@message}
            end
        end
        
    end

    # POST /categories/:category_id/voitures
    # POST /voitures
    def create
        @category = Category.find(voiture_params[:category])
        @paramsmapped = voiture_params
        @paramsmapped[:category] = @category
        puts @category
        @voiture = Voiture.create!(@paramsmapped)
        json_response(@voiture, :created)
    end

    # GET /categories/:category_id/voitures/:id
    # GET /voitures/:id
    def show
        json_response(@voiture)
    end

    # PUT /categories/:category_id/voitures/:id
    # PUT /voitures/:id
    def update
        @voiture.update(voiture_params)
        head :no_content
    end

    # DELETE /categories/:category_id/voitures/:id
    # DELETE /voitures/:id
    def destroy
        @voiture.destroy
        head :no_content
    end

    private

    def voiture_params
        # whitelist params
        params.permit(:image, :marque, :model, :places, :mode, :climatisation, :vitesse, :portes, :category)
    end

    def set_voiture
        @voiture = Voiture.find(params[:id])
    end
    def checkJour(jours)
        case jours
        when 0
            return 'Dimanche'
        when 1
            return 'Lundi'
        when 2
            return 'Mardi'
        when 3
            return 'Mercredi'
        when 4
            return 'Jeudi'
        when 5
            return 'Vendredi'
        when 6
            return 'Samedi'
        end
    end

    # def set_category
    #     @category = Category.find(params[:category_id])
    #   end
    
    # def set_category_Voiture
    #     @voiture = @category.voitures.find_by!(id: params[:id]) if @category
    # end
end

