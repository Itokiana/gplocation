
import React from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import ErrorField from '../ErrorField/ErrorField';
import axios from '../../axios'
import './FinalReservation.css';

const ContactSchema = Yup.object().shape({
    nom: Yup.string()
        .required('Le nom ne doit pas être vide'),
    prenom: Yup.string()
        .required('Le prenom ne doit pas être vide'),
    email: Yup.string()
        .required('le Mail ne doit pas être vide'),
    telephone: Yup.string()
        .required('Telephone ne doit pas être vide'),
    message: Yup.string()
        .required('Le message ne doit pas être vide')


});

class FinalReservation extends React.Component {
    render() {
        return (

            <>

                <div className="b-breadCumbs s-shadow wow " >
                    <div className="container">
                        <a href="/" className="b-breadCumbs__page">Accueil</a><span className="fa fa-angle-right"></span><a href="contacts.html" className="b-breadCumbs__page m-active">Finalisation de la réservation</a>
                    </div>

                </div>
                <section className="b-contacts s-shadow">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="b-contacts__form">
                                    <div className="b-contacts__address-hours">
                                        <h2 className="s-titleDet wow zoomInUp" data-wow-delay="0.5s">J'ai déjà un compte</h2>
                                    </div>
                                    <div className="FinalReservation">
                                        <form id="contactForm" novalidate className="s-form wow zoomInUp" data-wow-delay="0.5s">
                                            <input type="text" placeholder="Mon e-mail" value="" name="user-name" id="user-name" />
                                            <input type="text" placeholder="Mon mot de passe" value="" name="user-email" id="user-email" />

                                            <div className="boutton-FinalReservation">
                                                <button type="submit" className="btn m-btn">Valider<span className="fa fa-angle-right"></span></button><br /><br />
                                               <span ><a href="/find-email" className="oublier">Mot de passe oublié ?</a></span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="transaction text-justify">
                                        <div className="content-title">
                                            <h1 className="title-1">Prise en charge</h1>
                                        </div>
                                        <p className="text-1">
                                            <div className="col-sm-4"><img className="img-responsive" src="images/elements/1.png" alt="" /></div>Les transactions PayPlug sont effectuées sur un lien HTTPS établi entre le client et le serveur de paiement. Les données sensibles, telles que le numéro de carte bancaire du client et sa date d'expiration, sont entièrement cryptées et protégées grâce à un protocole SSL afin d'empêcher que les informations échangées puissent être interceptées en clair par un tiers au cours de la transaction.<br />
												Les numéros de cartes sont cryptés instantanément et ne sont pas accessibles par GP Location. De plus, PayPlug ne conserve pas les numéros de carte et s'appuie sur une infrastructure sécurisée agréée par Visa, Mastercard, et le Groupement des Cartes Bancaires selon la norme PCI-DSS au même titre que les meilleures solutions de paiement proposées par les autres banques.<br />
												Toutes les pages du site web PayPlug, ainsi que les liens de transmission sont sécurisés en SSL et bénéficient d'un certificat de sécurité Thawte Extended Validation.
											</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="b-contacts__address">
                                    <div className="b-contacts__address-hours">
                                        <h2 className="s-titleDet wow zoomInUp" data-wow-delay="0.5s">Je n'ai pas de compte</h2>
                                    </div>
                                    <div>

                                        <div className="transaction text-justify">
                                            <div className="FinalReservation">
                                                <form id="contactForm" className="contactForm" novalidate className="s-form wow zoomInUp" data-wow-delay="0.5s">
                                                    <input type="text" placeholder="Nom*" value="" name="user-name" id="user-name" />
                                                    <input type="text" placeholder="Prénom*" value="" name="user-email" id="user-email" />
                                                    <input type="text" placeholder="Téléphone*" value="" name="user-phone" id="user-phone" />
                                                    <input type="text" placeholder="Email*" value="" name="user-email" id="user-email" />
                                                    <input type="text" placeholder="Mot de passe*" value="" name="user-phone" id="user-phone" />



                                                    <p>* Champs obligatoires</p>
                                                    <center><button type="submit" className="btn m-btn" id="valider">Valider et payer<span className="fa fa-angle-right"></span></button></center>

                                                </form>
                                            </div>


                                            <div className="content-titre">
                                                <h1 className="title-1">Protection des données</h1>
                                            </div>
                                            <p className="text-1">
                                                Les informations recueillies font l'objet d'un traitemant informatique pour permettre à GP Location d'exécuter la réservation à distance. Si vous ne remplissez pas les champs obligatoires nous ne serons pas en mesure de vous fournir votre bon de réservation.
                                                Conformément à la loi "informatique et libertés" du 6 janvier 1978, vous bénéficiez d'un droit d'accès et de rectification aux informations qui vous concernent. Si vous souhaitez exercer ce droit et obtenir communication des informations vous concernant, veuillez vous adresser au service client internet via notre <a href="/contact">formulaire de contact.</a>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        )
    }

}


export default FinalReservation;