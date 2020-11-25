# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_25_142807) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admin_reservations", force: :cascade do |t|
    t.date "dateDepart"
    t.date "dateRetour"
    t.string "heureDepart"
    t.string "heureRetour"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "admin_users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string "ref"
    t.string "category"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "clients", force: :cascade do |t|
    t.string "nom"
    t.string "prenom"
    t.string "telephone"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_clients_on_email", unique: true
    t.index ["nom"], name: "index_clients_on_nom"
    t.index ["password_digest"], name: "index_clients_on_password_digest", unique: true
    t.index ["prenom"], name: "index_clients_on_prenom"
    t.index ["telephone"], name: "index_clients_on_telephone", unique: true
  end

  create_table "contacts", force: :cascade do |t|
    t.string "nom"
    t.string "prenom"
    t.string "email"
    t.string "telephone"
    t.text "message"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "jwt_blacklists", force: :cascade do |t|
    t.string "jti"
    t.datetime "exp"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["jti"], name: "index_jwt_blacklists_on_jti"
  end

  create_table "options", force: :cascade do |t|
    t.string "libelle"
    t.integer "prix"
    t.bigint "category_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_id"], name: "index_options_on_category_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.string "lieuDepart"
    t.string "lieuRetour"
    t.date "dateDepart"
    t.date "dateRetour"
    t.time "heureDepart"
    t.time "heureRetour"
    t.bigint "tarif_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["tarif_id"], name: "index_reservations_on_tarif_id"
  end

  create_table "reservations_tarifs", id: false, force: :cascade do |t|
    t.bigint "reservation_id", null: false
    t.bigint "tarif_id", null: false
    t.index ["reservation_id", "tarif_id"], name: "index_reservations_tarifs_on_reservation_id_and_tarif_id"
    t.index ["tarif_id", "reservation_id"], name: "index_reservations_tarifs_on_tarif_id_and_reservation_id"
  end

  create_table "tarif_de_bases", force: :cascade do |t|
    t.integer "jourDebut"
    t.integer "jourFin"
    t.float "prixBasseSaison"
    t.float "prixMoyenSaison"
    t.float "prixHauteSaison"
    t.bigint "category_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_id"], name: "index_tarif_de_bases_on_category_id"
  end

  create_table "tarif_details", force: :cascade do |t|
    t.integer "prix"
    t.integer "duree"
    t.bigint "tarif_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["tarif_id"], name: "index_tarif_details_on_tarif_id"
  end

  create_table "tarif_supplementaires", force: :cascade do |t|
    t.string "libelle"
    t.integer "prix"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tarifs", force: :cascade do |t|
    t.date "date_debut"
    t.date "date_fin"
    t.string "prix1"
    t.string "prix2"
    t.string "prix3"
    t.string "prix4"
    t.string "prix5"
    t.string "prix6"
    t.bigint "category_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_id"], name: "index_tarifs_on_category_id"
  end

  create_table "voitures", force: :cascade do |t|
    t.string "image"
    t.string "marque"
    t.string "model"
    t.string "places"
    t.string "mode"
    t.string "climatisation"
    t.string "vitesse"
    t.string "portes"
    t.bigint "category_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_id"], name: "index_voitures_on_category_id"
  end

  add_foreign_key "tarif_details", "tarifs"
end
