class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :update, :destroy]
  # before_action :authorized, only: [:create]

  # GET /categories
  def index
      @categories = Category.all.order('id ASC')
      json_response(@categories)
  end

  # POST /categories
  def create
      @category = Category.create!(category_params)
      json_response(@category, :created)
  end
  # GET /categories/dureemin/:id
  def showdureemin
    

    @dureemin = Category.find(params[:id])
    json_response(@dureemin) 

  end

  # GET /categories/:id
  def show
      @voitures = @category.voitures
      render json: {category: @category, voitures: @voitures}
  end

  # PUT /categories/:id
  def updateStock
    
    id = params[:id]
    Category.find(id).update(duree_min_bs: params[:BS_Min], duree_min_ms: params[:MS_Min], duree_min_hs: params[:HS_Min])
    head :no_content
  end
  
  def stock
    data = params[:value]
    id = params[:stocId]
    puts("id"*10)
    puts data
    
    id.each do |value|
      puts value
      
      stok="val#{value}"
      puts stok  
      Category.find(value).update(stock: data[stok])
      head :no_content
    end
  end


  # DELETE /categories/:id
  def destroy
      @category.destroy
      head :no_content
  end

  private

  def category_params
      # whitelist params
      params.permit(:ref, :name,:stock,:duree_min_bs,:duree_min_ms,:duree_min_hs)
  end

  def set_category
      @category = Category.find(params[:id])
  end
end

