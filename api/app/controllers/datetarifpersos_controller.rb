class DatetarifpersosController < ApplicationController
  before_action :set_datetarifperso, only: [:show, :update, :destroy]

  # GET /datetarifpersos
  def index
    @datetarifpersos = Datetarifperso.all

    render json: @datetarifpersos
  end

  # GET /datetarifpersos/1
  def show
    render json: @datetarifperso
  end

  # POST /datetarifpersos
  def create
    @datetarifperso = Datetarifperso.new(datetarifperso_params)

    if @datetarifperso.save
      render json: @datetarifperso, status: :created, location: @datetarifperso
    else
      render json: @datetarifperso.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /datetarifpersos/1
  def update
    if @datetarifperso.update(datetarifperso_params)
      render json: @datetarifperso
    else
      render json: @datetarifperso.errors, status: :unprocessable_entity
    end
  end
  
  def delete
    
    @datetarifperso.prixjourpersos.destroy_all
    @datetarifperso.delete
  end

  # DELETE /datetarifpersos/1
  def destroy
    @datetarifperso.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_datetarifperso
      @datetarifperso = Datetarifperso.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def datetarifperso_params
      params.require(:datetarifperso).permit(:datedebut, :datefin)
    end
end
