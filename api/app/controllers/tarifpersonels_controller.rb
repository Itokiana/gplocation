class TarifpersonelsController < ApplicationController
  before_action :set_tarifpersonel, only: [:show, :update, :destroy]

  # GET /tarifpersonels
  def index
    @tarifpersonels = Tarifpersonel.all

    render json: @tarifpersonels
  end

  # GET /tarifpersonels/1
  def show
    render json: @tarifpersonel
  end

  # POST /tarifpersonels
  def create
    #@tarifpersonel = Tarifpersonel.new(tarifpersonel_params)
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

      tarifperso = Tarifpersonel.create(datedebut: data[:dateDebutPerso], datefin: data[:dateFinPerso],jourdebut: data[jourD], jourfin: data[jourF], prixperso: data[surplus], category_id: data[:category_id])
      
      # if tarifperso.save
      #   render json: tarifperso, status: :created, location: tarifperso
      # else
      #   render json: tarifperso.errors, status: :unprocessable_entity
      # end
    end  
  end

  # PATCH/PUT /tarifpersonels/1
  def update
    if @tarifpersonel.update(tarifpersonel_params)
      render json: @tarifpersonel
    else
      render json: @tarifpersonel.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tarifpersonels/1
  def destroy
    tarif = Tarifpersonel.where(category_id: @tarifpersonel.category_id, datedebut: @tarifpersonel.datedebut, datefin: @tarifpersonel.datefin)
    tarif.each do |tari|
      puts "##"*20
      puts tari.id
      Tarifpersonel.destroy(tari.id)
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tarifpersonel
      @tarifpersonel = Tarifpersonel.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def tarifpersonel_params
      params.fetch(:tarifpersonel, {})
    end
end
