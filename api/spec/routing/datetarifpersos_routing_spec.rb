require "rails_helper"

RSpec.describe DatetarifpersosController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(:get => "/datetarifpersos").to route_to("datetarifpersos#index")
    end

    it "routes to #show" do
      expect(:get => "/datetarifpersos/1").to route_to("datetarifpersos#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/datetarifpersos").to route_to("datetarifpersos#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/datetarifpersos/1").to route_to("datetarifpersos#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/datetarifpersos/1").to route_to("datetarifpersos#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/datetarifpersos/1").to route_to("datetarifpersos#destroy", :id => "1")
    end
  end
end
