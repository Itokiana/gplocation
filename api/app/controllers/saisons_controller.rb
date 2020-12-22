class SaisonsController < ApplicationController
  before_action :set_saison, only: [:show, :update, :destroy]

  # GET /saisons
  def index
    @saisons = Saison.all

    render json: @saisons
  end

  # GET /saisons/1
  def show
    render json: @saison
  end

  # POST /saisons
  def create
    data=params[:value]
    # idDmin=params[:idD]
    puts"+++"*30
    puts data
    puts"****"*30
    

    tab = [0,1,2,3]
    idDmin = [0,1,2,3]

    tab.each do |val|
      durMin= "nombreS#{val}"
      check= "check#{val}"
      id = idDmin[val+1]
      # puts "xx"*30
      # puts id
      # puts"##"*30
      # puts durMin
     

      
      if data[check] == true
        Saison.find(id).update(duree_min: data[durMin])
      end
    end
  end

  # PATCH/PUT /saisons/1
  def update
    if @saison.update(saison_params)
      render json: @saison
    else
      render json: @saison.errors, status: :unprocessable_entity
    end
  end

  # DELETE /saisons/1
  def destroy
    @saison.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_saison
      @saison = Saison.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def saison_params
      params.require(:saison).permit(:nomsaison, :couleur)
    end
end
