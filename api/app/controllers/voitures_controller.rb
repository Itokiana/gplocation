class VoituresController < ApplicationController
    before_action :set_voiture, only: [:show, :update, :destroy]
    # before_action :authorized, only: [:create]
    # before_action :set_category
    # before_action :set_category_voiture, only: [:show, :update, :destroy]

    # GET /categories/:category_id/voitures
    # GET /voitures
    def index
        @voitures = Voiture.all

        puts "index"*10
        # @prix=[]
        # @voitures.each { |voiture|
        #    @prix.push(voiture.category.base_tarifs.select(:prixbasseSaison).where("jourdebut <= ? AND jourfin => ?",jours,jours))
        # }
        # puts "*"*50
        # puts @prix
        # render json: {voitures:@voiture}
        json_response(@voitures)
    end

    #GET /voitures/:dateDepart/:dateRetour/:jours
    def listevoiture
       
        @dateDepart = Date.strptime(params[:dateDepart], '%Y-%m-%d')
        @dateRetour = Date.strptime(params[:dateRetour], '%Y-%m-%d')
        @message = ""
        if @dateDepart > @dateRetour
            @message = "La date de depart devrait être inferieur à la date de retour."
            render json: {voitures:{},prix:[],message:@message}
        else
            @fermeexceptiondepart = Fermexception.find_by('jourfermedebut <= ? AND jourfermefin >= ?',@dateDepart,@dateDepart)
        
            @fermeexceptionretour = Fermexception.find_by('jourfermedebut <= ? AND jourfermefin >= ?',@dateRetour,@dateRetour)
        
            @prix=[]
            @voiture_dispo = []

            if @fermeexceptiondepart.nil? && @fermeexceptionretour.nil?
                @jourferier = Jourferier.find_by('dateferie = ? OR dateferie = ?',@dateDepart,@dateRetour)
                @voitures = Voiture.all

                @voitures.each do |voiture|
                    if voiture.category.stock >= 1
                        @voiture_dispo.push(voiture)
                        @ligne1 = voiture.category.tarif_personalises.select(:prix).find_by("datedebutperso <= ? AND datefinperso >= ? AND jourdebut <= ? AND jourfin >= ?",@dateDepart,@dateRetour,params[:jours].to_i,params[:jours].to_i)
                        if @ligne1.nil? || @ligne1.prix == -1
                            @prix.push(voiture.getPrixBase(params[:jours],@dateDepart,@dateRetour)*(params[:jours]).to_f)
                        else
                            @prix.push((@ligne1.prix) * (params[:jours]).to_f)
                        end
                    end
                end

                unless @jourferier.nil?
                    @prix = @prix.map { |prix| prix + @jourferier.surplus}
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

            if @prix[0]== 0
                @message = "Le nombre de jours de votre location est inférieur à la minimale"
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

    # def set_category
    #     @category = Category.find(params[:category_id])
    #   end
    
    # def set_category_Voiture
    #     @voiture = @category.voitures.find_by!(id: params[:id]) if @category
    # end
end

