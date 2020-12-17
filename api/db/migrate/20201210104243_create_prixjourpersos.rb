class CreatePrixjourpersos < ActiveRecord::Migration[6.0]
  def change
    create_table :prixjourpersos do |t|
      t.integer :jourdebut
      t.integer :jourfin
      t.integer :prixperso
      t.belongs_to :category, index:true
      t.belongs_to :datetarifperso, index:true

      t.timestamps
    end
  end
end
