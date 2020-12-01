

#place: rand(4..5), vitesse: "manuelle", types: Faker::Vehicle.fuel_type, climatiseur: true, status:"occupé", portes: Faker::Vehicle.door_count

# AdminUser.create(username: 'admin', email: 'admin@gmail.com', password: 'admin')
# Category.create(ref:'R01', name: 'CatA' )
# Category.create(ref:'R02', name: 'CatB' )
# Category.create(ref:'R03', name: 'CatC' )


#     Voiture.create(marque: "Audi", model: "Q5", category_id: 2)
#     Voiture.create(marque: "bmw", model: "X1", category_id: 3 )
#     Voiture.create(marque: "bmw", model: "X4", category_id: 1)
#     Voiture.create(marque: "peugeot", model: "308", category_id: 2)
    
    
#     i =1
#     while i <= 86 do
#         # Instructions.
#         BaseTarif.create(jourdebut: i , jourfin: i+4, prixbassesaison: i+12, prixmoyennesaison: i+13 , prixhautesaison: i+14, category_id: 2)
#         i+=5
#     end
#     j =1
#     while j <= 86 do
#         # Instructions.
#         BaseTarif.create(jourdebut: j , jourfin: j+4, prixbassesaison: j+12, prixmoyennesaison: j+13 , prixhautesaison: j+14, category_id: 1)
#         j+=5
#     end
#     k =1
#     while k <= 86 do
#         # Instructions.
#         BaseTarif.create(jourdebut: k , jourfin: k+4, prixbassesaison: k+12, prixmoyennesaison: k+13 , prixhautesaison: k+14, category_id: 3)
#         k+=5
#     end




# 5.times do
#     Reservation.create(lieu_depart: Faker::Space.planet , date_depart: Faker::Date.between(from: '2020-09-23', to: '2020-12-27'), heure_depart: Faker::Time.backward(days: 5, period: :morning, format: :short), 
#    lieu_retour: Faker::Space.planet , date_retour: Faker::Date.between(from: '2020-09-23', to: '2020-12-27'), heure_retour: Faker::Time.backward(days: 5, period: :morning, format: :short), 
#    num_vol: Faker::Number.leading_zero_number(digits: 10), compagnie: Faker::Space.planet , montant_total: rand(200..220), tarif_id: rand(1..5))
# end

# 5.times do
# 	TarifSupplementaire.create(libelle: "siège bébé", prix: rand(8..9), tarif_id: rand(1..5))
# end

# 5.times do
# 	ReservationOption.create(quantity: rand(1..3), tarif_supplementaire_id: rand(1..5), reservation_id: rand(1..5))

# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# Character.create(name: 'Luke', movie: movies.first)
# end



   


# 5.times do
#  c=  Tarif.create(prix: '1000')

# end

# Saison.create(nomsaison: "Basse Saison", couleur: "bleu")
# Saison.create(nomsaison: "Haute Saison", couleur: "rouge")
# Saison.create(nomsaison: "Moyenne Saison", couleur: "jaune")

# DateSaison.create(debutsaison: Date.new(2020,1,4), finsaison: Date.new(2020,6,5),saison_id:1)
# DateSaison.create(debutsaison: Date.new(2020,6,6), finsaison: Date.new(2020,8,30),saison_id:2)
# DateSaison.create(debutsaison: Date.new(2020,9,1), finsaison: Date.new(2020,12,31),saison_id:3)


 Client.create(nom: "Adam", prenom: "Hacian", telephone: "034671230", email: "Adam@gmail.com")
# Client.create(nom: "Piere", prenom: "bollard", telephone: "03612890", email: "Boular@gmail.com")
# Client.create(nom: "Paul", prenom: "Bary", telephone: "467671230", email: "Paul@gmail.com")
# Client.create(nom: "Bertran", prenom: "Christophe", telephone: "1221030", email: "Christoph@gmail.com")

# Reservation.create(date_depart: Date.new(2020,1,4), date_retour: Date.new(2020,12,4), heure_depart: "7:00", heure_retour: "19:10", prix: 201, 
# voiture_id: 1,  numero_vol: "430AF", client_id: 1)
# Reservation.create(date_depart: Date.new(2020,2,3), date_retour: Date.new(2020,5,3), heure_depart: "7:00", heure_retour: "19:10", prix: 201, 
# voiture_id: 2,  numero_vol: "430AF", client_id: 2)
# Reservation.create(date_depart: Date.new(2020,5,1), date_retour: Date.new(2020,10,5), heure_depart: "7:00", heure_retour: "19:10", prix: 201, 
# voiture_id: 3,  numero_vol: "430AF", client_id: 3)
# Reservation.create(date_depart: Date.new(2020,7,4), date_retour: Date.new(2020,12,4), heure_depart: "7:00", heure_retour: "19:10", prix: 201, 
# voiture_id: 4,  numero_vol: "430AF", client_id: 4)