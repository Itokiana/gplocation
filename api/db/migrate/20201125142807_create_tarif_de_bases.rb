class CreateTarifDeBases < ActiveRecord::Migration[6.0]
  def change
    create_table :tarif_de_bases do |t|
      t.integer :jourDebut
      t.integer :jourFin
      t.float :prixBasseSaison
      t.float :prixMoyenSaison
      t.float :prixHauteSaison
      t.belongs_to :category, index:true

      t.timestamps
    end
  end
end
