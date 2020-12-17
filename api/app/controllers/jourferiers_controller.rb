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
    jourget= params[:jourf]
    idUn= params[:idUn]
    idDeux= params[:idDeux]

    tabUn = params[:tableauUn]
    fintabUn = tabUn.last+1
    tabUn.push(fintabUn)

    tabDeux = params[:tableauDeux]
    fintabDeux = tabDeux.last+1
    tabDeux.push(fintabDeux)
  

    puts "#"*30
    puts idUn
    puts "+"*30
    puts idDeux[1]
    puts "+"*30
    puts tabUn
    puts "//"*30
    puts tabDeux
    puts "+"*30
 

    tabUn.each do |val|
      dateUn = "date#{val}"
      jourUn = "jour#{val}"
      prix = "prix#{val}"
      checkU = "chexkU#{val}"
     
      id = idUn[val-1]
      puts "??"*40
      puts id
      jourferierUn = Jourferier.find(id)
      
      if data[checkU]==true
          if jourferierUn.update(evenement: data[jourUn], dateferie: data[dateUn], surplus: data[prix], anne: data[:anneeU])
            puts "a"*50
            render json: jourferierUn, status: :created, location: jourferierUn
          else
            puts "="*50
            render json: jourferierUn.errors, status: :unprocessable_entity
          end
      end
    end

    tableauDeux.each do |val|
      dateDeux = "dateD#{val}"
      jourDeux = "jourD#{val}"
      prixDeux = "prixD#{val}"
      checkDeux = "chexkD#{val}"
     
      idD = idDeux[val-1]
      jourferierD = Jourferier.find(id)
      
      if data[checkDeux]==true
          if jourferierD.update(evenement: data[jourUn], dateferie: data[dateUn], surplus: data[prix], anne: data[:anneeU])
            puts "a"*50
            render json: jourferierD, status: :created, location: jourferierD
          else
            puts "="*50
            render json: jourferierD.errors, status: :unprocessable_entity
          end
      end
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
