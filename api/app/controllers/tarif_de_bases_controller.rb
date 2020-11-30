class TarifDeBasesController < ApplicationController
  before_action :set_tarif_de_basis, only: [:show, :update, :destroy]

  # GET /tarif_de_bases
  def index
    @tarif_de_bases = TarifDeBase.all

    render json: @tarif_de_bases
  end

  #Get /tarif_de_bases par categorie
  def categories
    @tarif_de_bases = Category.find(params[:id]).tarif_de_bases



    render json: @tarif_de_bases
  end

  # GET /tarif_de_bases/1
  def show
    render json: @tarif_de_basis
  end

  # POST /tarif_de_bases
  def create
    data=params[:tarif_de_basis][:data]
    tableau = params[:tarif_de_basis][:tableau]
    idCategorie = params[:tarif_de_basis][:ids]

    puts "*"*20
    puts data
    puts "*"*20
    puts tableau
    puts "*"*20
    puts idCategorie
    
    tableau.each do |value| 
      jourD="jourD#{value}"
      jourF="jourF#{value}"
      prixBS="prixBS#{value}"
      prixMS="prixMS#{value}"
      prixHS="prixHS#{value}"
      check="check#{value}"

      # puts ("#{value} : #{jourD}: #{data[jourD]},#{jourF}: #{data[jourF]},#{prixBS}: #{data[prixBS]},#{prixMS}: #{data[prixMS]},#{prixHS}: #{data[prixHS]},#{check}: #{data[check]}")
      
      if data[check]==true
        @tarif_de_basis = TarifDeBase.new(jourDebut: data[jourD], jourFin: data[jourF], prixBasseSaison: data[prixBS], prixMoyenSaison: data[prixMS], prixHauteSaison: data[prixHS], category_id: idCategorie[:id])

        if @tarif_de_basis.save
          puts "a"*50
          # render json: @tarif_de_basis, status: :created, location: @tarif_de_basis
        else
          puts "="*50
          # render json: @tarif_de_basis.errors, status: :unprocessable_entity
        end

      end
      

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
