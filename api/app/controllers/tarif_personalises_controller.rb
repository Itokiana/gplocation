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
    @tarif_personalise = TarifPersonalise.new(tarif_personalise_params)

    if @tarif_personalise.save
      render json: @tarif_personalise, status: :created, location: @tarif_personalise
    else
      render json: @tarif_personalise.errors, status: :unprocessable_entity
    end
  end

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
      params.require(:tarif_personalise).permit(:dateDebutPerso, :dateFinPerso, :prix)
    end
end
