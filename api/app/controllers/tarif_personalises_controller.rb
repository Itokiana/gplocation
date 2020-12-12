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
    
    data=params[:data]
    tab=params[:tabLigne]
    finTab = tab.last+1
    #tab.push(finTab)
    puts tab

    puts "voila #{data[:dateDebutPerso]} et le #{data[:dateFinPerso]}"

    tab.each do |val|
      surplus="prix#{val}"
      jourD="nombreJourD#{val}"
      jourF="nombreJourF#{val}"
      puts data[surplus]
      puts data[jourD]
      puts data[jourF]

      tarifperso = TarifPersonalise.create(datedebutperso: data[:dateDebutPerso], datefinperso: data[:dateFinPerso],jourdebut: data[jourD], jourfin: data[jourF], prix: data[surplus], category_id: data[:category_id])
      
      # if tarifperso.save
      #   render json: tarifperso, status: :created, location: tarifperso
      # else
      #   render json: tarifperso.errors, status: :unprocessable_entity
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
    tarif = TarifPersonalise.where(category_id: @tarif_personalise.category_id, datedebutperso: @tarif_personalise.datedebutperso, datefinperso: @tarif_personalise.datefinperso)
    tarif.each do |tari|
      puts "##"*20
      puts tari.id
      TarifPersonalise.destroy(tari.id)
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tarif_personalise
      @tarif_personalise = TarifPersonalise.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def tarif_personalise_params
      params.fetch(:tarif_personalise, {}).permit(:datedebutPerso, :datefinPerso, :prix, :category_id, jours_id)
    end
end
