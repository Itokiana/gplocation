class TarifPersonalisesController < ApplicationController
  before_action :set_tarif_personalise, only: [:show, :update, :destroy]

  # GET /tarif_personalises
  def index
    @tarif_personalises = TarifPersonalise.all

    render json: @tarif_personalises
  end

  # GET /tarif_personalises/1
  def show
    render json: @tarif_personalise
  end

  # POST /tarif_personalises
  def create
    data = params[:data]
    tabLigne = params[:tabLigne]
    fintab = tabLigne.last+1
    tab = tabLigne.push(fintab)

    puts (tab)

    # puts(data[:dateDebutPerso])
    # puts(data[:category_id])
    # puts(data[:dateFinPerso])
    

    tab.each do |value|
      id=data[:category_id]
      debut=data[:dateDebutPerso]
      fin=data[:dateFinPerso]
      jDe= "nombreJourD#{value}"
      jFi= "nombreJourF#{value}"
      prixT="prix#{value}"
      puts (jDe )
      puts(jFi)
      


      @tarif_personalise = TarifPersonalise.create!(datedebutperso: debut, datefinperso: fin, prix: data[prixT], category_id: id, jourdebut: data[jDe], jourfin: data[jFi])
      json_response(@tarif_personalise, :created)
      # # if @tarif_personalise.save
      #   render json: @tarif_personalise, status: :created, location: @tarif_personalise
      # else
      #   render json: @tarif_personalise.errors, status: :unprocessable_entity
      # end

    end  
  end


  # def create
  #   data = params[:data]
  #   tabLigne = params[:tabLigne]
    
  #   @tarif_personalise = TarifPersonalise.create!(dateDebutPerso: data[:dateDebutPerso], dateFinPerso: data[:dateFinPerso], prix: 234, category_id: 1, jours_id: 9)
  #   json_response(@tarif_personalise, :created)
  # end

  # PATCH/PUT /tarif_personalises/1
  def update
    if @tarif_personalise.update(tarif_personalise_params)
      render json: @tarif_personalise
    else
      render json: @tarif_personalise.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tarif_personalises/1
  def destroy
    @tarif_personalise.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tarif_personalise
      @tarif_personalise = TarifPersonalise.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def tarif_personalise_params
      params.fetch(:tarif_personalise, {}).permit(:dateDebutPerso, :dateFinPerso, :prix, :category_id, jours_id)
    end
end
