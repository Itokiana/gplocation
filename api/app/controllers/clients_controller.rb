class ClientsController < ApplicationController
  include BCrypt
  
  before_action :set_client, only: [:show, :update, :destroy]
  # before_action :auto_login
 

  # GET /clients
  def index
    @clients = Client.all

    render json: @clients
  end

  # GET /clients/1
  def show
    render json: @client
  end

  # POST /clients
  def create
    @client = Client.create!(client_params)
    @client.password_digest = params[:password_digest]
    if @client.valid?
      token = encode_token({client_id: @client.id})
      render json: {client: @client, token: token, message: "felicitation, compte valider"}
      session[:current_user_id] = @client.id
    else
      render json: {message: 'compte invalide'}, status: :unprocessable_entity
    end
    
  end

  #new_session
  def login
    @client = Client.find_by_email(params[:email])

    if @client.password_digest == params[:password_digest]
      
      token = encode_token({user_id: @client.id})
      render json: {client: @client, token: token, message: 'bonjour, bienvenue'}
      session[:current_user_id] = @client.id
    else
      render json: {message: "Email ou mot de passe incorrect"}, status: 202
    end
    
  end

  def finder
    current_user = Client.find_by(session[:current_user_id])

    render json: {client: current_user, message: "welcome to welcome, session"}
  end


  # PATCH/PUT /clients/1
  def update
    if @client.update(client_params)
      render json: @client
    else
      render json: @client.errors, status: :unprocessable_entity
    end
  end

  # DELETE /clients/1
  def destroy
    session[:current_user_id] = nil
    render json: {message: "vous etes deconnecter"}
    # @client.destroy
    head :no_content
  end

  # def auto_login
  #   if current_client    
  #     render json: {user: @client, message: "vous etes deja conecter"} 
  #   else
  #     render json: {message: "veuiller vous connecter"}
  #   end
  # end

  # def current_client
  #   return nil if !session[:user_id] || !session[:user_id]['id']
  #   return @client if @client
  #   @client = Client.find_by_id(session[:user_id]['id'])
  # end

  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_client
      @client = Client.find(params[:id])
    end

   

    # Only allow a trusted parameter "white list" through.
    def client_params
      params.permit(:nom, :prenom, :telephone, :email, :password_digest, :client)
    end
end
