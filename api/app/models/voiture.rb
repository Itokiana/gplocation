class Voiture < ApplicationRecord

    mount_uploader :image, ImageUploader 
   
    # validations
    #validates_presence_of :image, :marque, :model, :places, :type, :climatisation, :vitesse, :portes
    belongs_to :category
    def getPrixBase(jours,dateDepart,dateRetour)
        ligne = self.category.base_tarifs.select(:id,:prixbassesaison,:prixhautesaison,:prixmoyennesaison).find_by("jourdebut <= ? AND jourfin >= ?",jours.to_i,jours.to_i)
    
        case DateSaison.find_by("debutsaison <= ? and finsaison >= ?",dateDepart,dateRetour).saison.nomsaison
        when "Basse Saison"  
            return ligne.prixbassesaison
        when "Haute Saison"
            return ligne.prixhautesaison
        when "Moyen Saison"
             return ligne.prixmoyennesaison
        end
    end
    
end
