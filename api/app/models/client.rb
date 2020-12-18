class Client < ApplicationRecord
    has_secure_password
    has_many :carte_informations
    has_many :reservations
end

