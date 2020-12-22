require "rails_helper"

RSpec.describe TarifpersonelsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(:get => "/tarifpersonels").to route_to("tarifpersonels#index")
    end

    it "routes to #show" do
      expect(:get => "/tarifpersonels/1").to route_to("tarifpersonels#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/tarifpersonels").to route_to("tarifpersonels#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/tarifpersonels/1").to route_to("tarifpersonels#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/tarifpersonels/1").to route_to("tarifpersonels#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/tarifpersonels/1").to route_to("tarifpersonels#destroy", :id => "1")
    end
  end
end
