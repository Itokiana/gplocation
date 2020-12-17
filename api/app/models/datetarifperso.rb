class Datetarifperso < ApplicationRecord
    has_many :prixjourpersos, dependent: :destroy
end
