require "rails_helper"

RSpec.describe PrixjourpersosController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(:get => "/prixjourpersos").to route_to("prixjourpersos#index")
    end

    it "routes to #show" do
      expect(:get => "/prixjourpersos/1").to route_to("prixjourpersos#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/prixjourpersos").to route_to("prixjourpersos#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/prixjourpersos/1").to route_to("prixjourpersos#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/prixjourpersos/1").to route_to("prixjourpersos#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/prixjourpersos/1").to route_to("prixjourpersos#destroy", :id => "1")
    end
  end
end
