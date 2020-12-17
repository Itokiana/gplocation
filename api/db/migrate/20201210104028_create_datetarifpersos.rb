class CreateDatetarifpersos < ActiveRecord::Migration[6.0]
  def change
    create_table :datetarifpersos do |t|
      t.date :datedebut
      t.date :datefin

      t.timestamps
    end
  end
end
