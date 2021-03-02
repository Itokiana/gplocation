import React from 'react'
import Modal from 'react-bootstrap/Modal';


import './conditonModal.css';

function ConditionModal(props) {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered

            >
                <Modal.Header closeButton>
                </Modal.Header>
                <div className="contentModal">
                    <p className="paraLocation">
                        <h3 className="titreModal">DISPOSITIONS GÉNÉRALES</h3>
                        <div>
                            <ul>
                                <li>La location est personnelle et non transmissible, cession et sous-location sont interdites. Seuls sont habilités à conduire le véhicule, le locataire et la (ou les) personnes désignées sur le contrat.</li>
                                <li>Seule la restitution du véhicule en parfait état et de ses documents (carte grise ou copie certifiée conforme, vignette) fait cesser la location. Tout duplicata en cas de vol sera à la charge du locataire.</li>
                                <li>Une caution d'un montant compris entre 750 et 1 000 euros suivant la catégorie du véhicule sera demandée au locataire. Cette caution sera prise par carte bancaire (pré-autorisation non encaissée).</li>
                                <li>Les frais de carburant sont à la charge du locataire, tout manque à la réintégration du véhicule sera facturé. L’entretien, les vidanges, le remplacement des pièces mécaniques sont à la charge du loueur. Aucun remboursement de facture ne sera effectué sans notre accord préalable.</li>
                            </ul>
                            <h3 className="titreModal">RESPONSABILITÉ</h3>
                            <p>Le locataire déclare que le véhicule sera conduit par lui-même ou toute autre personne figurant sur le contrat et ayant au moins 23 ans et au moins 2 ans de permis. Le locataire demeure le seul responsable en vertu de l’article 21 de l’ordonnance N58-1216 du 15 décembre 1958, des amendes, contraventions, procès verbaux et poursuites douanières contre lui. Il s’engage par conséquent à rembourser au loueur tous les frais de cette nature, éventuellement payés en ses lieux et places. Les PV ou amendes que vous aurez reçus pendant votre séjour et que vous n’aurez pas réglés, seront renvoyés avec la majoration aux services de gendarmerie ou de Police qui vous les feront parvenir. Le véhicule est livré en bon état de marche et de carrosserie avec des pneumatiques en bon état et une roue de secours complète. La pression des pneus et les niveaux devront être contrôlés par le locataire à intervalle régulier pendant la location. Nous vous demandons de prendre soin des véhicules et de nous les rendre propres. Dans le cas contraire 15€ seront prélevés sur la caution.</p>
                            <h3 className="titreModal">LIVRAISON</h3>
                            <p>En vertu de l’arrêter N°155/01 confirmé le 9 mars 2001 par la cour d’Appel, les livraisons et restitutions de véhicules ne se feront pas à l’aéroport.</p>
                            <h3 className="titreModal">1. COMMENT SUIS-JE ASSURE ?</h3>
                            <p><strong>Qui est assuré ?</strong></p>
                            <p>Seul(s) le conducteur(s) nommément désigné(s) sur le contrat de location et pour la durée de celui-ci (jusqu’à la restitution des clés et papiers au loueur pendant les heures d’ouverture de l’agence) dispose(nt) de la qualité d’assuré(s) ou titre du contrat d’assurance du loueur.</p>
                            <p><strong>Qu’elles sont les assurances contractuellement acquises ?</strong></p>
                            <p>Le(s) conducteur(s) désigné(s) au contrat bénéficie(nt) de la police d’assurance automobile souscrite par le loueur couvrent la Responsabilité Civile pour les dommages causés au tiers, le vol ou la tentative de vol, l’incendie et les dommages au véhicules loué (sous réserve d’une franchise de 750 euros ).</p>
                            <p><strong>Que reste-il à ma charge en cas de sinistre ?</strong></p>
                            <p>Deux cas se présentent :</p>
                            <ul>
                                <li>Soit vous n’êtes pas responsable du sinistre dès lors que les assureurs auront pu attribuer la totalité de la responsabilité du sinistre à un tiers identifié, au quel cas, vous ne devez rien et cette franchise n’est pas appliquée.</li>
                                <li>Soit vous êtes responsable du sinistre dès lors que celui-ci est couvert par l’assurance, au quel cas vous ne devez que la Franchise (indemnité correspondant à votre contribution au malus de l’assurance) et ce, à concurrence des montants précisés aux conditions particulières du présent contrat de location.</li>
                            </ul>
                            <h3 className="titreModal">2. QUE DOIS-JE FAIRE EN CAS DE PANNE, D’ACCIDENT, VOL, DESTRUCTION DE VEHICULE ?</h3>
                            <p>En cas de panne, d’accident, de vol ou de destruction de véhicule, appelez 24 heures sur 24, 7 jours sur 7, au 0692 370 380.<br /> Tout accident doit être déclaré à GP Location dans les 48 heures. Vous bénéficiez ainsi d’un dépannage et remorquage 24h/24 et 7j/7 (exclue panne d’essence, panne de batterie, panne due a la mauvaise utilisation du locataire ).</p>
                            <p><strong>ATTENTION : En ce qui concerne l’assistance au véhicule, le locataire accepte de se conformer précisément aux instructions qui lui seront communiquées par son correspondant. Dans le cas contraire, le locataire restera financièrement responsable des prestations qu’il aura mises en œuvre sur sa seule initiative et sans l’accord préalable de son correspondant.</strong></p>
                            <h3 className="titreModal">3.QUELLES SONT MES OBLIGATIONS EN CAS DE VOL OU D’ACCIDENT ?</h3>
                            <p>Vous-même, ou le conducteur désigné vous engagez pour votre propre compte de tout conducteur nommément désigné au contrat, à respecter les trois obligations suivantes :</p>
                            <ul>
                                <li>Déclarer le vol ou la tentative de vol du véhicule aux autorités de police ou de gendarmerie et au loueur dès que vous en avez connaissance, et fournir au loueur dans les 24 heures les clés originales du véhicule.</li>
                                <li>Déclarer immédiatement au loueur tout accident de la circulation concernant le véhicule loué et remettre au loueur un exemplaire lisible du constat amiable rempli et signé par les deux parties ainsi que les coordonnés des témoins, s’il y a lieu.<br /> En cas d’accident sans tiers, vous devrez remplir seul un constat amiable faisant état des circonstances exactes du sinistre.</li>
                                <li>Contactez l’assistance comme indique au paragraphe N°2.</li>
                            </ul>
                            <h3 className="titreModal">4. QUE DOIS-JE PAYER AU LOUEUR ?</h3>
                            <p><strong>Deux types de frais seront facturés.</strong></p>
                            <p className="sousTmodal"><strong>4-1. Les frais certains, c'est-à-dire :</strong></p>
                            <ul>
                                <li>Le résultat de l’application du tarif déterminé aux conditions particulières et qui dépend de la durée de location et / ou du nombre de kilomètres parcourus ainsi que tous suppléments prévus au tarif général de location.</li>
                                <li>Les frais de carburant manquant avec la taxe de remise à niveau 10 euros (a contrario, aucun remboursement ne sera effectué)</li>
                                <li>Les prestations de service que vous aurez demandées au loueur.</li>
                            </ul>
                            <p><strong className="sousTmodal">4-2. Les Frais complémentaire, notamment :</strong></p>
                            <ul>
                                <li>La et les franchise (s) d’assurance et les frais de réparation dus en cas d’accident (le coût de la franchise représentant votre contribution au malus d’assurance, les dommages au véhicule non couverts par le contrat d’assurance).</li>
                                <li>Les contraventions et amendes diverses légalement à votre charge et imputables à la garde et l’utilisation du véhicule. 30 EUR seront prélevés sur la caution pour la gestion des contraventions</li>
                                <li>Les frais éventuels de parking.</li>
                                <li>Les frais de constat d’expert.</li>
                                <li>Pour les dommages d’un coût inférieur à la franchise, le tarif correspond au barème appliqué par GP Location.</li>
                                <li>Les frais d’immobilisation à concurrence d’une journée de location de la catégorie du véhicule loué sur la base du tarif général en Km illimité.</li>
                                <li>Les frais de gestion du sinistre d’un montant forfaitaire de 50 euros ttc par sinistre en cas de responsabilité.</li>
                                <li>Les frais d’annulation de la location conformément aux conditions du tarif général une journée de location de la catégorie du véhicule loué sur la base du tarif général en Km illimité.</li>
                                <li>Une journée supplémentaire de location de la catégorie du véhicule loué sur la base du tarif général en Km illimité sera facturée à défaut de restitution à l’heure dite et passé un délai de tolérance de soixante minutes.</li>
                                <li>Les frais de relances pour impayées d’un montant forfaitaire de 50 euros TTC par relance.</li>
                            </ul>
                            <p><strong>ATTENTION : Il est rappelé que dans le cas ou le locataire serait impliqué dans plusieurs sinistres pendant la durée de la location, chaque sinistre donnera lieu à l’application d’une franchise selon modalités ci-dessus.</strong></p>
                            <h3 className="titreModal">5. QUAND NE SUIS-JE PAS ASSURE ?</h3>
                            <p><strong>Vous n’êtes pas assurés dans les cas suivants et l’ensemble de ces dommages restent donc à la charge du locataire :</strong></p>
                            <ul>
                                <li>Si vous êtes dans l’incapacité de restituer au loueur les clés originales du véhicule après avoir constaté le vol de celui-ci. Dans le cas, vous serez tenu au paiement de la valeur du véhicule estimée par expert.</li>
                                <li>Quand les dommages au véhicule résultent de brûlures, de détériorations intérieures, de la surcharge, de dommages sur les parties hauts du véhicule, ou les dommages causés au dessous du véhicule et leurs conséquences mécaniques, ainsi que les dommages aux pneumatiques, enjoliveurs et jantes.</li>
                                <li>Quand le conducteur est en état d’ivresse tel que défini par le code de la route, ou lorsque le conducteur a fait usage de drogues ou de stupéfiants légalement interdits, ou lorsque le conducteur aura absorbé des médicaments, médicaments prescrits ou non, dont la notice précise que son usage est de nature à provoquer un état de somnolence.</li>
                                <li>Quand les dommages au véhicule surviennent postérieurement à la date de restitution du véhicule prévue au présent contrat, ce cas étant assimilé à une conduite contre le gré du loueur et à un détournement de véhicule. Cette disposition ne s’applique pas si vous avez obtenu un accord exprès de prolongation de la durée de location de la part du loueur.</li>
                                <li>Si vous même et / ou le conducteur avez fourni au loueur de fausse informations concernant votre identité ou la validité de votre permis de conduire. Il en sera de même en cas de fausses déclarations sur le constat amiable ou la déclaration de sinistre ou l’état descriptif au retour du véhicule.</li>
                                <li>Pour les dommages ou la perte de quelque nature que ce soit, affectant les effets personnels, les objets transportés ou les animaux contenus dans le véhicule.</li>
                                <li>Quand les dommages résultent d’un fait volontaire de vous-même et /ou conducteur.</li>
                                <li>Quand le véhicule est utilisé pour transport payant de passagers ou pour l’apprentissage de la conduite.</li>
                                <li>Quand le véhicule et loués et utilisé en surcharge ou transportant un nombre de passagers supérieur à celui autorisés sur la carte grise.</li>
                                <li>Les pertes, le vol ou dégradation d’équipement : autoradios, essuie-glaces, antenne, roues, jantes, enjoliveurs et rétroviseurs, les bris de glace.</li>
                                <li>Le remorquage en cas de sinistre responsable ou sans tiers identifié.</li>
                                <li>Toutes dégradations, accidents ou panne survenus hors des voies publiques urbaines ne seront pas garanties par l’assurance, les frais éventuels seront supportés intégralement par le locataire.</li>
                            </ul>
                            <p><strong>ATTENTION : le locataire sera redevable des réparations induites par erreur de carburant (par exemple, du diesel dans le réservoir au lieu du super). Le locataire accepte d’ores et déjà que le loueur puisse prélever les somme dues au titre des frais complémentaire sur le compte bancaire au moyen de la pré-autorisation bancaire (VAD) ou encaisser le chèque, effectuée ou remis au titre du dépôt de garantie à la signature du contrat.</strong></p>
                            <p>Afin d’éviter tout malentendu ou contestation lors du retour du véhicule, vous trouverez ci dessous le barème concernant les éventuels dégâts de carrosserie que nous pourrions être amenés à constater ensemble et à vous facturer à votre retour. Les pièces détachées à remplacer vous seront facturées au tarif TTC concessionnaire.</p>
                            <table className="tableFacture">
                                <tbody className="bodyFact">
                                    <tr className=" contentTable ">
                                        <td></td>
                                        <td>RAYURE LEGERE</td>
                                        <td>RAYURE PROFONDE</td>
                                        <td>ENFONCEMENT</td>
                                    </tr>
                                    <tr>
                                        <td>AILE</td>
                                        <td>56€</td>
                                        <td>140€</td>
                                        <td>200€</td>
                                    </tr>
                                    <tr>
                                        <td>PORTE</td>
                                        <td>84€</td>
                                        <td>140€</td>
                                        <td>200€</td>
                                    </tr>
                                    <tr>
                                        <td>CAPOT</td>
                                        <td>84€</td>
                                        <td>140€</td>
                                        <td>200€</td>
                                    </tr>
                                    <tr>
                                        <td>TOIT</td>
                                        <td>100€</td>
                                        <td>160€</td>
                                        <td>250€</td>
                                    </tr>
                                    <tr>
                                        <td>PARE CHOC</td>
                                        <td>56€</td>
                                        <td>80€</td>
                                        <td>160€</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Bris de glace : 200€</p>
                            <p>&nbsp;</p>
                            <p>Le loueur se réserve le droit d'annuler une réservation passée sur le moteur de réservation Gplocation jusqu'à 48 heures après la réservation en cas de non disponibilité du véhicule</p>
                        </div>
                    </p>
                </div>
                <Modal.Footer>
                    <button onClick={props.onHide} className="btn m-btn" style={{background:'gray', color:'white'}}>Fermer <span className="fa fa-angle-right" id="bgDetail"></span></button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default ConditionModal;
