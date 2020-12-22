class Category < ApplicationRecord
    has_many :voitures
    has_many :options
    has_many :tarifpersonels
    has_many :base_tarifs
end
