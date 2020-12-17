require 'rails_helper'

RSpec.describe "Datetarifpersos", type: :request do
  describe "GET /datetarifpersos" do
    it "works! (now write some real specs)" do
      get datetarifpersos_path
      expect(response).to have_http_status(200)
    end
  end
end
