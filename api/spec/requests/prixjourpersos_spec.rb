require 'rails_helper'

RSpec.describe "Prixjourpersos", type: :request do
  describe "GET /prixjourpersos" do
    it "works! (now write some real specs)" do
      get prixjourpersos_path
      expect(response).to have_http_status(200)
    end
  end
end
