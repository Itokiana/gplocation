
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


import ErrorLogin from './ErrorLogin';
import axios from '../../axios'
import './Login.css';


const ClientRegistrationSchema = Yup.object().shape({
    nom: Yup.string()
		.required('le nom ne doit pas être vide')
		.min(4, 'Nom invalide')
		.matches(/([a-z-A-Z])/, 'Le nom ne doit contenir que des lettres'),
	prenom: Yup.string()
		.required('le Prenom ne doit pas être vide')
		.min(4, 'Prenom invalide')
		.matches(/[a-z]/, 'Le prenom ne doit contenir que des lettres'),
	telephone: Yup.string()
		.required('le Numero de telephone ne doit pas être vide')
		.min(8, 'Numero telephone incomplet')
		.max(15, 'Numero inconnue')
		.matches(/([0-9])/, 'Le numero de telephone ne doit contenir que des chiffres'),
	email: Yup.string()
		.email('Email invalide,merci de vouloire completé')
		.required('l \' email ne doit pas être vide')

			
});

const ClientSession = Yup.object().shape({
	email: Yup.string()
		.email('Email invalide,merci de vouloire completé')
		.required('l \' email ne doit pas être vide'),
	password_digest: Yup.string()
		.required('le mot de passe ne doit pas laisser à vide')
});


class Login extends React.Component {
	constructor(propos) {
		super(propos);

		this.state = {
			message: null,
			etape: '',
			client: {}
		}
	}

	render() {
		const message = this.state.message;
		const etape = this.state.etape;
		const panjifa = this.state.client;
		return (

			<>

						
			<div className="b-breadCumbs s-shadow wow " >
				<div className="container">
					<a href="home.html" className="b-breadCumbs__page">Home</a><span className="fa fa-angle-right"></span><a href="contacts.html" className="b-breadCumbs__page m-active">Contact Us</a>
				</div>
					
			</div>
			<section className="b-contacts s-shadow">
				<div className="container">
					{/* { message ? (<div>{message}</div>) : null } */}
					<div className="row">
						<div><br/>
							{ message ? (<div className="alert_message">{message}</div>) : null }</div>
						<div className="col-xs-6">
							<div className="b-contacts__form">
								<div className="b-contacts__address-hours">
									<h2 className="s-titleDet wow zoomInUp" data-wow-delay="0.5s">J'ai déjà un compte</h2>
								</div>
								<div className="login">
								<Formik
								initialValues={{
									email: '',
									password_digest: ''
								}}
								validationSchema={ClientSession}
								onSubmit={(values, { resetForm }) => {
									axios.post('/client_login', values).then(response => {
										if (response.status === 200) {
											
											this.setState({
												message: response.data.message
											})

											this.setState({
												etape: 2,
												client: response.data.client
											})

											console.log(response.data.client)
											
										}

									})
								
								}}
								>
								{({ errors, touched, handleSubmit }) => (
									<Form id="contactForm"noValidate className="s-form wow zoomInUp" onSubmit={handleSubmit} >
										<div>
											<Field type="email" placeholder="EMAIL"  name="email" className="email_field" />
											<ErrorLogin errors={errors} touched={touched} row="email"/>
										</div>
										<div>
											<Field type="password" placeholder="MOT DE PASSE"  name="password_digest" />
											<ErrorLogin errors={errors} touched={touched} row="password_digest"/>
										</div>
										<div className="boutton-login">
										<button type="submit" className="btn m-btn">Valider<span className="fa fa-angle-right"></span></button><br/><br/>
										<span ><a href="#" className="oublier">Mot de passe oublié ?</a></span>
										</div>
									</Form>)}
								</Formik>
								</div>
									
							</div>
							<div className="content">
								<div className="transaction text-justify">
									<div className="content-title">
										<h1 className="title-1">Sécurité de paiement</h1>
									</div>
									<fieldset>
									<p className="text-1">
										<div className="col-sm-4"><img className="img-responsive" src="images/elements/1.png" alt="" /></div>Les transactions PayPlug sont effectuées sur un lien HTTPS établi entre le client et le serveur de paiement. Les données sensibles, telles que le numéro de carte bancaire du client et sa date d'expiration, sont entièrement cryptées et protégées grâce à un protocole SSL afin d'empêcher que les informations échangées puissent être interceptées en clair par un tiers au cours de la transaction.<br />
										Les numéros de cartes sont cryptés instantanément et ne sont pas accessibles par GP Location. De plus, PayPlug ne conserve pas les numéros de carte et s'appuie sur une infrastructure sécurisée agréée par Visa, Mastercard, et le Groupement des Cartes Bancaires selon la norme PCI-DSS au même titre que les meilleures solutions de paiement proposées par les autres banques.<br />
										Toutes les pages du site web PayPlug, ainsi que les liens de transmission sont sécurisés en SSL et bénéficient d'un certificat de sécurité Thawte Extended Validation.
									</p>
									</fieldset>
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
										<div className="login">
										<Formik
										initialValues={{
											nom: '',
											prenom: '',
											email: '',
											telephone: '',
											password_digest: ''
											
										}}
										validationSchema={ClientRegistrationSchema}
										onSubmit={(values, { resetForm }) => {
											console.log("Test");
											axios.post('/clients', values).then(response => {
												if (response.status === 200) {
													resetForm();
													this.setState({
														message: response.data.message
													});

													this.setState({
														etape: 2
													})

													// (<Redirect to='/profil'/>)
												} else if (response.status === 202) {
													this.setState({
														message: response.data.message
													})
												} 
											})
										}}
										>
										{({ errors, touched, handleSubmit }) => (
											<Form className="contactForm" className="s-form wow zoomInUp" onSubmit={handleSubmit}  >
												<div>
													<Field type="text" placeholder="NOM*" name="nom" />
													<ErrorLogin errors={errors} touched={touched} row="nom"/>
												</div>
												<div>
													<Field type="text" placeholder="PRENOM*" name="prenom" />
													<ErrorLogin errors={errors} touched={touched} row="prenom"/>
												</div>
												<div>
													<Field type="text" placeholder="TÉLEPHONE*" name="telephone" />
													<ErrorLogin errors={errors} touched={touched} row="telephone"/>
												</div>
												<div>
													<Field type="email" placeholder="EMAIL*" name="email"  className="email_field"/>
													<ErrorLogin errors={errors} touched={touched} row="email"/>
												</div>
												<div>
													<Field type="password" placeholder="MOT DE PASSE*" name="password_digest" />
													
												</div>

												
												<p>* Champs obligatoires</p>
												<div className="boutton-login">
													<button type="submit" className="btn m-btn">
														Valider
														<span className="fa fa-angle-right"></span>
													</button>
												</div>
													
											</Form>)}
										</Formik>
									</div>
									
									<div className="content-titre">
										<h1 className="title-1">Protection des données</h1>
									</div>
										<p className="text-1">
											Les informations recueillies font l'objet d'un traitemant informatique pour permettre à GP Location d'exécuter 
											la réservation à distance. Si vous ne remplissez pas les champs obligatoires nous ne serons pas en mesure de vous fournir 
											votre bon de réservation.
											Conformément à la loi "informatique et libertés" du 6 janvier 1978, vous bénéficiez d'un droit d'accès et 
											de rectification aux informations qui vous concernent. Si vous souhaitez exercer ce droit et obtenir 
											communication des informations vous concernant, veuillez vous adresser au service client internet via notre <a href="/contact">formulaire 
											de contact</a>.
										</p>
									</div>

								</div>
							
							</div>
						</div>
					</div>
					{etape == 2 ? (<Redirect to='/profil' voila={panjifa}/>) : null}
				</div>
			</section>			

			</>

		)
	}

}


export default Login;