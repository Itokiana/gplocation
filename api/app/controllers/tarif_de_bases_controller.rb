class TarifDeBasesController < ApplicationController
  before_action :set_tarif_de_basis, only: [:show, :update, :destroy]

  # GET /tarif_de_bases
  def index
    @tarif_de_bases = TarifDeBase.all

    render json: @tarif_de_bases
  end

  # GET /tarif_de_bases/1
  def show
    render json: @tarif_de_basis
  end

  # POST /tarif_de_bases
  def create
    @tarif_de_basis = TarifDeBase.new(tarif_de_basis_params)

    if @tarif_de_basis.save
      render json: @tarif_de_basis, status: :created, location: @tarif_de_basis
    else
      render json: @tarif_de_basis.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tarif_de_bases/1
  def update
    if @tarif_de_basis.update(tarif_de_basis_params)
      render json: @tarif_de_basis
    else
      render json: @tarif_de_basis.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tarif_de_bases/1
  def destroy
    @tarif_de_basis.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tarif_de_basis
      @tarif_de_basis = TarifDeBase.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def tarif_de_basis_params
      params.fetch(:tarif_de_basis, {}).permit(:jourDebut, :jourFin, :prixBasseSaison, :prixMoyenSaison, :prixHauteSaison, :category_id)
    end
end
