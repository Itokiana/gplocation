class BaseTarifsController < ApplicationController
  before_action :set_base_tarif, only: [:show, :update, :destroy]

  # GET /base_tarifs
  def index
    @base_tarifs = BaseTarif.all

    render json: @base_tarifs
  end

  # GET /base_tarifs/1
  def show
    @base_tarifs = Category.find(params[:id]).base_tarifs.order('base_tarifs ASC')

    render json: {tarif_par_categorie: @base_tarifs}
  end



  # POST /base_tarifs
  def create

    data=params[:data]
    tableau = params[:tableau]
    idTarif= params[:id]

    puts "*"*20
    puts data
    puts "*"*20
    puts tableau
    puts "*"*20
    puts idTarif

    
    tableau.each do |value| 
      puts "*"*30
      puts value
      jourD="jourD#{value}"
      jourF="jourF#{value}"
      prixBS="prixBS#{value}"
      prixMS="prixMS#{value}"
      prixHS="prixHS#{value}"
      check="check#{value}"

      id = idTarif[value-1]

     
      @base_tarif = BaseTarif.find(id)
      if data[check]==true
        # @base_tarif = BaseTarif.find(idTarif[value-1]).update(jourDebut: data[jourD], jourFin: data[jourF], prixBasseSaison: data[prixBS], prixMoyenneSaison: data[prixMS], prixHauteSaison: data[prixHS])
        # @base_tarif = BaseTarif.new(jourDebut: data[jourD], jourFin: data[jourF], prixBasseSaison: data[prixBS], prixMoyenneSaison: data[prixMS], prixHauteSaison: data[prixHS], category_id: idCategorie[:id])

        if @base_tarif.update(jourdebut: data[jourD], jourfin: data[jourF], prixbassesaison: data[prixBS], prixmoyennesaison: data[prixMS], prixhautesaison: data[prixHS])
          puts "a"*50
          render json: @base_tarif
        else
          puts "="*50
          render json: @base_tarif.errors, status: :unprocessable_entity
        end

      end
      puts "*"*30

    end
  end

  # PATCH/PUT /base_tarifs/1
  def update
    if @base_tarif.update(base_tarif_params)
      render json: @base_tarif
    else
      render json: @base_tarif.errors, status: :unprocessable_entity
    end
  end

  # DELETE /base_tarifs/1
  def destroy
    @base_tarif.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_base_tarif
      @base_tarif = BaseTarif.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def base_tarif_params
      params.require(:base_tarif).permit(:jourDebut, :jourFin, :prixBasseSaison, :prixMoyenneSaison, :prixHauteSaison)
    end
end
