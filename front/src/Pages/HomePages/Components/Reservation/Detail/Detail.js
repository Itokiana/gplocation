import React, { useState } from 'react';

import './detail.css';
import Modal from 'react-bootstrap/Modal';


import ConditionModal from './ConditionModal';
function Detail(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered

      >
        <Modal.Header closeButton>
        </Modal.Header>
        <div className='detailscroll'>
          <section className="b-more " >

            <center><button onClick={() => setModalShow(true)} className="btn m-btn" style={{ background: 'gray', color: 'white' }}>
              Conditions générales de location<span className="fa fa-angle-right" id="bgDetail"></span>
            </button></center>

            <ConditionModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />



            <p><span className="text-bold">Age minimum :</span> 23 ans</p>
            <p><span className="text-bold"> Nombre minimum d'année de permis :</span> 2 ans</p>
            <p><span className="text-bold"> Moyen de paiement :</span>23 ans</p> <br />
            <p>Acompte suivant le montant de la réservation :</p>
            <div className="list-detail">
              <ul>
                <li>moins de 150€ : paiement de la totalité en ligne par CB</li>
                <li>plus de 150€ : acompte de 100€ par tranche de 500€ par CB, le solde une fois sur place par carte bancaire, espèces ou chèque.</li>

              </ul>
            </div>

            <h2 className="tire-assurance">Assurances</h2>
            <p> <span className="text-bold">Assurance :</span>   Tous risques et vol avec franchise.</p>
            <p> <span className="text-bold">Montant de la franchise :</span>   1000€</p>
            <p> <span className="text-bold">Caution :</span>   1000€ sur place par pré-autorisation bancaire (non encaissée).</p>

            <h2 className="tire-assurance">Prise en charges</h2>
            <p> <span className="text-bold">A l'aéroport Roland Garros :</span>   Votre loueur vous prend en charge personnellement à l'aéroport. Ceci vous évitera d'attendre au comptoir de l'aéroport après de nombreuses heures de vols et de payer la taxe d'aéroport.</p>
            <p> <span className="text-bold">Sainte-Marie : </span>   Votre loueur vous prend en charge personnellement à l'aéroport. Ceci vous évitera d'attendre au comptoir de l'aéroport après de nombreuses heures de vols et de payer la taxe d'aéroport.</p>
            <p><span className="option-covid">Option annulation covid :</span>  En cas d'annulation, l'acompte sera remboursable par le loueur s'il est prévenu jusqu'à 6 heures avant le départ  quel que soit la raison sans justificatif à présenter.   Si elle est payante, cette option ne sera par contre pas remboursée.</p>
            <div >
              <h1 >Protection des données</h1>
            </div>
            <p >
              Les informations recueillies font l'objet d'un traitemant informatique pour permettre à GP Location d'exécuter la réservation à distance. Si vous ne remplissez pas les champs obligatoires nous ne serons pas en mesure de vous fournir votre bon de réservation.
              Conformément à la loi "informatique et libertés" du 6 janvier 1978, vous bénéficiez d'un droit d'accès et de rectification aux informations qui vous concernent. Si vous souhaitez exercer ce droit et obtenir communication des informations vous concernant, veuillez vous adresser au service client internet via notre formulaire de contact.
                        </p>
          </section>
        </div>
        <Modal.Footer>
        <button onClick={props.onHide} className="btn m-btn" style={{ background: 'gray', color: 'white' }}>Fermer <span className="fa fa-angle-right" id="bgDetail"></span></button>
      </Modal.Footer>

      </Modal>
      


    </>
  );
}

export default Detail;