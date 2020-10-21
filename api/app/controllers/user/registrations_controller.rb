# frozen_string_literal: true

class User::RegistrationsController < Devise::RegistrationsController
  respond_to :json
  def create

    user = User.new(params[:user])
    if user.save
      render :json=> user.as_json(:auth_token=>user.authentication_token, :email=>user.email), :status=>200
      return
    else
      warden.custom_failure!
      render :json=> user.errors, :status=>422
    end
  end
end