class CreateTarifpersonels < ActiveRecord::Migration[6.0]
  def change
    create_table :tarifpersonels do |t|
      t.integer :jourdebut
      t.integer :jourfin
      t.float :prixperso
      t.date :datedebut
      t.date :datefin
      t.belongs_to :category, index:true

      t.timestamps
    end
  end
end
