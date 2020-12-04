class CreateHoraireJours < ActiveRecord::Migration[6.0]
  def change
    create_table :horaire_jours do |t|
      t.string :nomjour
      t.time :heuredebut
      t.time :heurefin
      t.integer :prixsurplus

      t.timestamps
    end
  end
end
