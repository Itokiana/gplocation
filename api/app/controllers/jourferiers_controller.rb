class JourferiersController < ApplicationController
  before_action :set_jourferier, only: [:show, :update, :destroy]

  # GET /jourferiers
  def index
    @jourferiers = Jourferier.all

    render json: @jourferiers
  end

  # GET /jourferiers/1
  def show
    render json: @jourferier
  end

  # POST /jourferiers
  def create
    # @jourferier = Jourferier.new(jourferier_params)
    data= params[:value]
    tabUn = params[:tableauUn]
    fintabUn = tabUn.last+1
    unTab = tabUn.push(fintabUn)
    tabDeux = params[:tableauDeux]
    idJ = params[:id]
    puts"++"*20
    puts data
    puts "--"*20
    puts idJ
    puts "xx"*20

    

    # unTab.each do |val|
    #   dateUn = "date#{val}"
    #   jourUn = "jour#{val}"
    #   prix = "prix#{val}"
    #   checkU = "chexkU#{val}"

    #   if data[checkU]==true
    #       if @jourferier.update(evenement: data[jourUn], dateferie: data[dateUn], surplus: data[prix], anne: data[:annee])
    #         puts "a"*50
    #         render json: @jourferier, status: :created, location: @jourferier
    #       else
    #         puts "="*50
    #         render json: @jourferier.errors, status: :unprocessable_entity
    #       end
    #   end
    # end
  end

  # PATCH/PUT /jourferiers/1
  def update
    if @jourferier.update(jourferier_params)
      render json: @jourferier
    else
      render json: @jourferier.errors, status: :unprocessable_entity
    end
  end

  # DELETE /jourferiers/1
  def destroy
    @jourferier.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_jourferier
      @jourferier = Jourferier.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def jourferier_params
      params.require(:jourferier).permit(:evenement, :dateferie, :anne)
    end
end
