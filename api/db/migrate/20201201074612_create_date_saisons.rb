class CreateDateSaisons < ActiveRecord::Migration[6.0]
  def change
    create_table :date_saisons do |t|
      t.date :debutsaison
      t.date :finsaison
      t.belongs_to :saison, index:true

      t.timestamps
    end
  end
end
