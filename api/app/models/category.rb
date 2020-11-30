class Category < ApplicationRecord
    has_many :voitures
    has_many :options
    has_many :tarifDeBases
    has_many :tarifPersonalises
end
