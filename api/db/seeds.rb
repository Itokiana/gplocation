

#place: rand(4..5), vitesse: "manuelle", types: Faker::Vehicle.fuel_type, climatiseur: true, status:"occupé", portes: Faker::Vehicle.door_count

<<<<<<< HEAD
AdminUser.create(username: 'sambatra', email: 'natarabem@gmail.com', password: '123456789')
=======
AdminUser.create(username: 'admin', email: 'admin@gmail.com', password: 'admin')
>>>>>>> ac939dc0b18d230a07f2602909d710bb8bab294b
Category.create(ref:'R01', name: 'CatA' )
Category.create(ref:'R02', name: 'CatB' )
Category.create(ref:'R03', name: 'CatC' )

<<<<<<< HEAD
    Voiture.create(marque: "renault", model: "clio", category_id: 2)
    Voiture.create(marque: "renault", model: "megane", category_id: 3)
    Voiture.create(marque: "citroën", model: "C1", category_id: 1)
    Voiture.create(marque: "renault", model: "Duster", category_id: 2)
    # i =1
    # while i <= 86 do
    #     # Instructions.
    #     BaseTarif.create(jourDebut: i , jourFin: i+4, prixBasseSaison: i+12, prixMoyenneSaison: i+13 , prixHauteSaison: i+14, category_id: 3)
    #     i+=5
    # end

    # Tarif.create(prix: 200, voiture_id: 1)
    # Tarif.create(prix: 250, voiture_id: 2)
    # Tarif.create(prix: 249, voiture_id: 3)
    # Tarif.create(prix: 200, voiture_id: 4)

    # TarifDeBase.create(id: 1, jourDebut: 1, jourFin: 4, prixBasseSaison: 25.0, prixMoyenSaison: 30.0, prixHauteSaison: 40.0, category_id: 1)
=======

    Voiture.create(marque: "Audi", model: "Q5", category_id: 2)
    Voiture.create(marque: "bmw", model: "X1", category_id: 3 )
    Voiture.create(marque: "bmw", model: "X4", category_id: 1)
    Voiture.create(marque: "peugeot", model: "308", category_id: 2)
    i =1
    while i <= 86 do
        # Instructions.
        BaseTarif.create(jourdebut: i , jourfin: i+4, prixbassesaison: i+12, prixmoyennesaison: i+13 , prixhautesaison: i+14, category_id: 2)
        i+=5
    end
    j =1
    while j <= 86 do
        # Instructions.
        BaseTarif.create(jourdebut: j , jourfin: j+4, prixbassesaison: j+12, prixmoyennesaison: j+13 , prixhautesaison: j+14, category_id: 1)
        j+=5
    end
    k =1
    while k <= 86 do
        # Instructions.
        BaseTarif.create(jourdebut: k , jourfin: k+4, prixbassesaison: k+12, prixmoyennesaison: k+13 , prixhautesaison: k+14, category_id: 3)
        k+=5
    end

>>>>>>> ac939dc0b18d230a07f2602909d710bb8bab294b



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

Saison.create(nomsaison: "Basse Saison", couleur: "bleu")
Saison.create(nomsaison: "Haute Saison", couleur: "rouge")
<<<<<<< HEAD
Saison.create(nomsaison: "Moyen Saison", couleur: "jaune")

DateSaison.create(debutsaison: Date.new(2020,1,4), finsaison: Date.new(2020,2,8),saison_id:1)
DateSaison.create(debutsaison: Date.new(2020,6,6), finsaison: Date.new(2020,7,4),saison_id:2)
DateSaison.create(debutsaison: Date.new(2020,5,2), finsaison: Date.new(2020,6,6),saison_id:3)
=======
Saison.create(nomsaison: "Moyenne Saison", couleur: "jaune")

DateSaison.create(debutsaison: Date.new(2020,1,4), finsaison: Date.new(2020,6,5),saison_id:1)
DateSaison.create(debutsaison: Date.new(2020,6,6), finsaison: Date.new(2020,8,30),saison_id:2)
DateSaison.create(debutsaison: Date.new(2020,9,1), finsaison: Date.new(2020,12,31),saison_id:3)
>>>>>>> ac939dc0b18d230a07f2602909d710bb8bab294b
