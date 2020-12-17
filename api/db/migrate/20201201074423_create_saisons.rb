class CreateSaisons < ActiveRecord::Migration[6.0]
  def change
    create_table :saisons do |t|
      t.string :nomsaison
      t.string :couleur
      t.integer :duree_min
      

      t.timestamps
    end
  end
end
