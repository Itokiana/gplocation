class Saison < ApplicationRecord
    has_many :date_saisons
    has_many :durreminimals
end
