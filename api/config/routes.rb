Rails.application.routes.draw do


<<<<<<< HEAD
  resources :tarifpersonels
  resources :prixjourpersos
  resources :datetarifpersos
=======
  resources :reservations
>>>>>>> ac939dc0b18d230a07f2602909d710bb8bab294b
  resources :jourferiers
  resources :fermexceptions
  resources :ouvertexceptions
  resources :horaire_jours
  resources :carte_informations
  resources :date_saisons
  resources :saisons
  resources :jours
  resources :tarif_personalisers
  resources :base_tarifs
  resources :tarif_de_bases
  resources :admin_reservations
  #client sessio et registration
  resources :clients, only: [:create, :destroy, :update, :index]
  post "/client_login", to: "clients#login"
  get "/last_client", to: "clients#finder"


  #routes categories
  resources :categories do
    #routes options
    resources :options
  end


  
  resources :voitures 
  get '/voitures/:dateDepart/:dateRetour/:jours', to: 'voitures#listevoiture'

  resources :tarifs


  resources :contacts
  
  
  resources :contacts
  resources :admin_users

  post "/login", to: "admin_users#login"
  get "/auto_login", to: "admin_users#auto_login"


  get '/reservations', to: 'reservations#index'
  post '/reservations', to: 'reservations#create'
  get '/reservations/:id', to: 'reservations#show'
  put '/reservations/:id', to: 'reservations#update'
  delete '/reservations/:id', to: 'reservations#destroy'

  delete'/datetarifpersos/delete/:id', to: 'datetarifpersos#delete'

  resources :tarif_supplementaires
  resources :tarifs
  mount PayplugRails::Engine, at: "/ipn"

  resources :charges, only: [:new,:create]
  
end
