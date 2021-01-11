class Voiture < ApplicationRecord

    mount_uploader :image, ImageUploader 
   
    # validations
    #validates_presence_of :image, :marque, :model, :places, :type, :climatisation, :vitesse, :portes
    belongs_to :category
    has_many :reservations
    def getPrixBase(jours,dateDepart,dateRetour)
        category = self.category
        ligne = self.category.base_tarifs.select(:id,:prixbassesaison,:prixhautesaison,:prixmoyennesaison).find_by("jourdebut <= ? AND jourfin >= ?",jours.to_i,jours.to_i)
        nom_saison = DateSaison.find_by("debutsaison <= ? and finsaison >= ?",dateDepart,dateRetour)
        if nom_saison.nil?
            if category.duree_min_bs <= jours.to_i
                return ligne.prixbassesaison
            else
                return 0
            end 
        else
            case nom_saison.saison.nomsaison
                # when "Basse Saison" 
                #     if category.duree_min_bs <= jours.to_i
                #         return ligne.prixbassesaison
                #     else
                #         return 0
                #     end
                    
                when "Haute Saison"
                    if category.duree_min_hs <= jours.to_i
                        return ligne.prixhautesaison
                    else
                        return 0
                    end 
                    
                when "Moyenne Saison"
                    if category.duree_min_ms <= jours.to_i
                        return ligne.prixmoyennesaison
                    else
                        return 0
                    end
            end
        end
    end
    
    
end
