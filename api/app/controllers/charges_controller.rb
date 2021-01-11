class ChargesController < ApplicationController
    def new
      puts "errror card"
    end
    
    def create

      Stripe.api_key = ENV['STRIPE_SECRET_KEY']

      

      # Token is created using Stripe Checkout or Elements!
      # Get the payment token ID submitted by the form:
      token = params[:stripeToken]
      amount = Paimentpartiel.first.montant * 100
      description = "client_id: #{params[:description]}"
      charge = Stripe::Charge.create({
        amount: amount.to_i,
        currency: 'eur',
        description: description,
        source: token,
      })
      render json: charge.paid
    
    rescue Stripe::CardError => e
      e.message
      render json: e.message
    end
    
end
