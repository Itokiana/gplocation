require 'payplug_rails'
class CarteInformationsController < ApplicationController
  before_action :set_carte_information, only: [:show, :update, :destroy]

  # GET /carte_informations
  def index
    @carte_informations = CarteInformation.all

    render json: @carte_informations
  end

  # GET /carte_informations/1
  def show
    render json: @carte_information
  end

  # POST /carte_informations
  def create
    puts carte_information_params
    @carte_information = CarteInformation.new(carte_information_params)

    if @carte_information.save
      render json: @carte_information, status: :created, location: @carte_information
    else
      render json: @carte_information.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /carte_informations/1
  def update
    if @carte_information.update(carte_information_params)
      render json: @carte_information
    else
      render json: @carte_information.errors, status: :unprocessable_entity
    end
  end

  # DELETE /carte_informations/1
  def destroy
    @carte_information.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_carte_information
      @carte_information = CarteInformation.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def carte_information_params
      params.fetch(:carte_information, {}).permit(:numero_carte, :cvv, :date_expiration_carte, :client_id)
    end
end
