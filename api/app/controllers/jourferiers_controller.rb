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
    tabDeux = params[:tableauDeux]
    tabUn = params[:tableauUn]
    fintabUn = tabUn.last+1
    fintabDeux = tabDeux.last+1

    if (idUn.length()<tabUn.length())
      $i=idUn.length()+1
      $fin=tabUn.last
      until $i > $fin do
        dateUn = "date#$i"
        jourUn = "jour#$i"
        prix = "prix#$i"
        checkU = "checkU#$i"
        jourferierUn= Jourferier.new(evenement: data[jourUn], dateferie: data[dateUn], surplus: data[prix], anne: data[:anneeU])

        if jourferierUn.save
          puts "a"*50
          render json: jourferierUn, status: :created, location: jourferierUn
        else
          puts "="*50
          render json: jourferierUn.errors, status: :unprocessable_entity
        end
        $i +=1
      end
    else
      tabUn.push(fintabUn)
      tabUn.each do |val|
        dateUn = "date#{val}"
        jourUn = "jour#{val}"
        prix = "prix#{val}"
        checkU = "checkU#{val}"
       
       
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

    end

    if (idDeux.length()<tabDeux.length())
      $j=idDeux.length()+1
      $finD=tabDeux.last
      until $j > $finD do
        datDeux = "dateD#$j"
        jourDeux = "jourD#$j"
        prixD = "prixD#$j"
        checkD = "checkD#$j"
        jourferierDeux= Jourferier.new(evenement: data[jourDeux], dateferie: data[dateDeux], surplus: data[prixD], anne: data[:anneeD])

        if jourferierDeux.save
          puts "a"*50
          render json: jourferierDeux, status: :created, location: jourferierDeux
        else
          puts "="*50
          render json: jourferierUn.errors, status: :unprocessable_entity
        end
        $j +=1
      end
    else
      tabDeux.push(fintabDeux)
      tabDeux.each do |val|
        dateDeux = "dateD#{val}"
        jourDeux = "jourD#{val}"
        prixDeux = "prixD#{val}"
        checkDeux = "checkD#{val}"
      
        idD = idDeux[val-1]
        jourferierD = Jourferier.find(idD)
        
        if data[checkDeux]==true
            if jourferierD.update(evenement: data[jourDeux], dateferie: data[dateDeux], surplus: data[prixDeux], anne: data[:anneeD])
              puts "a"*50
              render json: jourferierD, status: :created, location: jourferierD
            else
              puts "="*50
              render json: jourferierD.errors, status: :unprocessable_entity
            end
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