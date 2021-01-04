class ReservationsController < ApplicationController
  before_action :set_reservation, only: [:show, :update, :destroy]

  # GET /reservations
  def index
    @reservations = Reservation.where('date_retour >= ?',DateTime.now).order("date_retour ASC")
    @hash1= {}
    @nombredepart = Reservation.where('date_depart >= ?',DateTime.now).count()
    @nombreretour = Reservation.where('date_retour >= ?',DateTime.now).count()
    @reservations.each do |reservation|
      voiture = reservation.voiture
      client = reservation.client
      if @hash1[reservation.date_retour].present?
        @hash1[reservation.date_retour] [reservation.id]= [reservation,voiture,client] 
      else
        @hash1[reservation.date_retour] = {}
        @hash1[reservation.date_retour] [reservation.id]= [reservation,voiture,client]
      end
    end

    render json:{reservation: @hash1 , depart: @nombredepart, retour: @nombreretour} 
  end

  # GET /reservations/1
  def show
    render json: @reservation
  end
  # GEt /reservation/liste
  def liste
    @res = Reservation.all

    render json: @res
  end

  # POST /reservations
  def create
    @reservation = Reservation.new(reservation_params)

    if @reservation.save
      render json: @reservation, status: :created, location: @reservation
    else
      render json: @reservation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reservations/1
  def update
    if @reservation.update(reservation_params)
      render json: @reservation
    else
      render json: @reservation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reservations/1
  def destroy
    @reservation.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reservation
      @reservation = Reservation.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def reservation_params
      params.fetch(:reservation, {}).permit(:date_depart,:date_retour,:heure_depart,:heure_retour,:voiture_id,:client_id,:prix,:numero_vol)
    end
end
