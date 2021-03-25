import React from 'react';
import axios from '../../../../axios';
import ErrorField from './ErrorField';
import * as Yup from 'yup';
import './Style.css';
import { Field, Form, Formik } from 'formik';
import Reservation from '../Reservation/Reservation';
import { parse, isDate } from "date-fns";

function parseDateString(value, originalValue) {
	const parsedDate = isDate(originalValue)
		? originalValue
		: parse(originalValue, "yyyy-MM-dd", new Date());

	return parsedDate;
}


const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);

const ReservationSchema = Yup.object().shape({
	dateDepart: Yup.date()
		.required('vous devez indiquer votre date de départ')
		.transform(parseDateString).min(yesterday, "la date de depart doit être supérieur ou égale à aujourd'hui"),
	dateRetour: Yup.date()
		.default(null)
		.required('vous devez indiquer votre date de retour')
		.when('dateDepart', (dateDepart, schema) => {
			return dateDepart && schema.min(dateDepart, 'la date retour doit être supérieur à la date depart')
		}),
	heureDepart: Yup.string()
		.required('information important'),
	heureRetour: Yup.string()
		.required('information important'),
	lieuDepart: Yup.string()
		.required('Ne peut pas etre vide'),
	lieuRetour: Yup.string()
		.required('Ne peut pas etre vide'),

});


export default class Search extends React.Component {
	state = {
		etape: 1,
		voitures: [],
		date_reservation: {},
		message: '',
		prix: [],
		jour: null,
		stock: [],
		account: []
	}

	changerEtape = (newEtape) => {
		this.setState({
			etape: newEtape
		});
	}
	dateDiff(date1, date2) {
		let date11 = new Date(`${date1}`);
		let date22 = new Date(`${date2}`);
		let timeDiff = Math.abs(date22.getTime() - date11.getTime());
		let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
		return diffDays
	}



	render() {
		const { etape } = this.state;

		return (
			<>

				<div className="container">

					<div className="b-search__main wow zoomInUp" data-wow-delay="0.3s">

						<h4>Pour louer une voiture à la Réunion, rien de plus simple !<br /> Réservez votre voiture en ligne et pas chère avec GP Location.</h4>
						<Formik
							initialValues={{
								dateDepart: '',
								dateRetour: '',
								heureDepart: '',
								heureRetour: '',
								lieuDepart: '',
								lieuRetour: ''
							}}
							validationSchema={ReservationSchema}
							onSubmit={(values, { resetForm }) => {

								let date1 = values.dateDepart;
								let date2 = values.dateRetour;
								let jours = this.dateDiff(date1, date2) + 1;
								let data = JSON.stringify(values)
								this.setState({
									jour: jours
								})
								axios.get(`/voitures/${data}/${jours}`).then(reponse => {
									if (reponse.status === 200) {
										this.setState({
											voitures: reponse.data.voitures,
											prix: reponse.data.prix,
											message: reponse.data.message,
											account: reponse.data.account,
											etape: 2,
											stock: reponse.data.stock,
											date_reservation: values
										});
									}
									console.log(values)
								});

							}}
						>
							{({ errors, touched }) => (
								<Form className="b-search__main-form">
									<div className="row">
										<div className="col-xs-12 col-md-8">
											<div className="m-firstSelects">
												<div className="col-xs-5">
													<p>Lieu de départ</p>
													<Field as="select"
														name="lieuDepart"
														className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 
                                px-3 mb-3 leading-tight focus:outline-none focus:bg-white">
														<option value="gplocation">------</option>
														<option value="Aéroport Roland-Garros">Aéroport Roland-Garros</option>
														<option value="Sainte-Marie">Sainte-Marie</option>

													</Field>
													<ErrorField errors={errors} touched={touched} row="lieuDepart" />

												</div>
												<div className="m-secondSelects">
													<div className="col-xs-4">
														<p>Date de départ</p>
														<Field type="date" className="select_field" name="dateDepart" />
														<ErrorField errors={errors} touched={touched} row="dateDepart" />
													</div>
												</div>
												<div className="col-xs-3">
													<p>heure de départ</p>
													<Field type="time" className="select_field" name="heureDepart" />
													<ErrorField errors={errors} touched={touched} row="heureDepart" />
												</div>
											</div>
											<div className="m-secondSelects">
												<div className="col-xs-5">
													<p>Lieu de retour</p>
													<Field as="select"
														name="lieuRetour"
														className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 
                                px-3 mb-3 leading-tight focus:outline-none focus:bg-white">
														<option value="gplocation">-------</option>
														<option value="Aéroport Roland-Garros">Aéroport Roland-Garros</option>
														<option value="Sainte-Marie">Sainte-Marie</option>

													</Field>
													<ErrorField errors={errors} touched={touched} row="lieuRetour" />

												</div>
												<div className="col-xs-4">
													<p>date de retour</p>
													<Field type="date" className="select_field" name="dateRetour" />
													<ErrorField errors={errors} touched={touched} row="dateRetour" />
												</div>
												<div className="col-xs-3">
													<p>heure de retour</p>
													<Field type="time" className="select_field" name="heureRetour" />
													<ErrorField errors={errors} touched={touched} row="heureRetour" />
												</div>
											</div>
										</div>
										<div className="col-md-4 col-xs-12 text-left s-noPadding">
											<div className="b-search__main-form-range">

											</div>
											<div className="b-search__main-form-submit">

												<button type="submit" className="btn m-btn">LOUER<span className="fa fa-angle-right"></span></button>
											</div>
										</div>

									</div>
								</Form>)}
						</Formik>

					</div>
					{etape === 2 && this.state.message === '' ? (<Reservation stock={this.state.stock} accompte={this.state.account} jour={this.state.jour} date_reservation={this.state.date_reservation} voitures={this.state.voitures} prix={this.state.prix} />) : null}
					<div>{this.state.message !== '' ?
						(
							this.state.message === 'aucun' ?
								<div className="alert_message">Click ici pour voir plus de voiture<a href='https://www.rentiles.fr/?listing=1&fond=contenu&id_contenu=465&date_d=11/02/2021&heure_d=10:00&date_f=21/02/2021&heure_f=10:00&affiliate=1476&nocache=1612962739'> lien </a></div> :
								<div className="alert_message"><h4>{this.state.message}</h4></div>
						) : null}</div>
				</div>

			</>
		);
	}
}






