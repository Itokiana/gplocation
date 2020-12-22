import React , {useState} from 'react';
import Button from 'react-bootstrap/Button';

import ConditionModal from '../../Detail/ConditionModal';

import './paiment.css';
import * as Yup from 'yup';
import Checkout from './Checkout';

function PaimentEtape1(props) {
    const [status, setStatus] = useState(false)
    const [modalShow, setModalShow] = React.useState(false);
    const CarteInformation = Yup.object().shape({
        numero_carte: Yup.string()
            .required('le numero de la carte ne doit pas être vide')
            .min(16, 'Numero carte incomplet')
		    .max(19, 'Numero de carte inconnue')
		    .matches(/([0-9])/, 'Le numero de telephone ne doit contenir que des chiffres'),
        cvv: Yup.string()
            .required('le cvv ne doit pas être vide')
            .min(3,'cvv incomplet')
            .max(3,'cvv inconnue'),
        date_expiration_carte: Yup.string()
            .required('la date ne peut pas être vide')
            .min(5,'date incomplet')
            .max(5,'date inconnue'),

    });
    const Paiement = () => {
        setStatus(!status) 
    }
    return (
        <div>
            <div className="col-xs-6">
                <div className="b-contacts__address">
                    <div className="transaction text-justify">
                        <div className="login">
                            <form id="formlivraison" action="" method="post">
                                    <h3 class="form-connec-h3">Prise en charge du véhicule</h3>
                                        <div class="ptop10 cc_cursor">
                                                <input type="hidden" name="livraison" value="4" />
                                                <input type="hidden" id="lieu-livraison" name="lieu-livraison" value="Aéroport de la Réunion Roland-Garros" />
                                                    <p class=""><b>Nous vous attendrons dès votre sortie de l'avion, avec votre nom inscrit sur une pancarte.</b></p><br />
                                            <div id="livraison-infosup">
                                        <label id="lab-livr-infosup" htmlFor="livr-infosup">
                                            <p class="paddingp">Merci d'indiquer votre numéro de vol et la compagnie :
                                        <input type="text" id="livr-infosup" name="livr-infosup" /></p><br />
                                        </label>
                                    </div>
                                </div>
                            </form>
                            <p class="petitp"><strong>Nom :</strong> {(props.client.client.nom)} {(props.client.client.prenom)}- <strong>Téléphone :</strong> {(props.client.client.telephone)}<br />
                                    <strong>Email de réception de la réservation :</strong>{(props.client.client.email)}</p>
                                    <fieldset id="fd_confirm">
                                        <label htmlFor="certifpermis">
                                        <p><input type="checkbox" id="certifpermis" checked="checked" name="certifpermis" /> Je certifie avoir 21 ans et deux ans de permis*
                                        </p>
                                        </label>
                                        <label htmlFor="conditions">
                                        <p><input type="checkbox" id="conditions" checked="checked" name="conditions" /> J'ai lu les conditions générales de location, et j'y adhère sans réserve.* 
                                        
                                            
                                            <Button onClick={() => setModalShow(true)} className="titre-15">
                                            lire
                                            </Button>

                                            <ConditionModal
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                            />
                                        </p>
                                        </label>
                                    </fieldset>
                                <h3 class="form-connec-h3">Total à payer : acompte de 100 €</h3>
                                <p class="paddingp">Puis {parseInt(props.data.prix)-100} € à régler à la remise des clés par carte bancaire, espèce ou chèque </p>
                                <h3 class="paiementcarte cc_cursor">Paiement sécurisé par carte bancaire :</h3>

                                <center><button onClick={Paiement} className="btn btn-primary d-flex justify-content-center" >Payer</button></center>

                                {status? (<Checkout data={props}/>):null}

                                <h2>Sécurité de paiement</h2>
                                <p class="petitp">Les transactions PayPlug sont effectuées sur un lien HTTPS établi entre le client et le serveur de paiement. Les données sensibles, telles que le numéro de carte bancaire du client et sa date d'expiration, sont entièrement cryptées et protégées grâce à un protocole SSL afin d'empêcher que les informations échangées puissent être interceptées en clair par un tiers au cours de la transaction.</p>
                                <p class="petitp">Les numéros de cartes sont cryptés instantanément et ne sont pas accessibles par GP Location. De plus, PayPlug ne conserve pas les numéros de carte et s'appuie sur une infrastructure sécurisée agréée par Visa, Mastercard, et le Groupement des Cartes Bancaires selon la norme PCI-DSS au même titre que les meilleures solutions de paiement proposées par les autres banques.</p>
                                <p class="petitp">Toutes les pages du site web PayPlug, ainsi que les liens de transmission sont sécurisés en SSL et bénéficient d'un certificat de sécurité Thawte Extended Validation.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaimentEtape1;
























