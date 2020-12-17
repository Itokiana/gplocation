class PrixjourpersosController < ApplicationController
  before_action :set_prixjourperso, only: [:show, :update, :destroy]

  # GET /prixjourpersos
  def index
    @prixjourpersos = Prixjourperso.all

    render json: @prixjourpersos
  end

  # GET /prixjourpersos/1
  def show
    render json: @prixjourperso
  end

  # GET /prixjourpersos/date
  def date
    
  end


  # POST /prixjourpersos
  def create

    data=params[:data]
    tab=params[:tabLigne]
    finTab = tab.last+1
    # tab.push(finTab)
    puts tab

    @dateperso = Datetarifperso.new(datedebut: data[:dateDebutPerso], datefin: data[:dateFinPerso])
    @dateperso.save

    id=@dateperso.id
    


    puts "==="*20
    puts id
   

    puts "voila #{data[:dateDebutPerso]} et le #{data[:dateFinPerso]}"


    tab.each do |val|
      surplus="prix#{val}"
      jourD="nombreJourD#{val}"
      jourF="nombreJourF#{val}"
      puts data[surplus]
      puts data[jourD]
      puts data[jourF]
      @prixjourperso = Prixjourperso.new(jourdebut: data[jourD], jourfin: data[jourF], prixperso: data[surplus], category_id: data[:category_id], datetarifperso_id: id )

      @prixjourperso.save
      
    end

  end

  # PATCH/PUT /prixjourpersos/1
  def update
    if @prixjourperso.update(prixjourperso_params)
      render json: @prixjourperso
    else
      render json: @prixjourperso.errors, status: :unprocessable_entity
    end
  end

  # DELETE /prixjourpersos/1
  def destroy
    @prixjourperso.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_prixjourperso
      @prixjourperso = Prixjourperso.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def prixjourperso_params
      params.require(:prixjourperso).permit(:jourdebut, :jourfin, :prixperso)
    end
end
