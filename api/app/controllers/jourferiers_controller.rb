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
    @jourferier = Jourferier.new(jourferier_params)

    if @jourferier.save
      render json: @jourferier, status: :created, location: @jourferier
    else
      render json: @jourferier.errors, status: :unprocessable_entity
    end
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
