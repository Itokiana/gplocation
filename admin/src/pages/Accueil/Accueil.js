import React, { Component } from 'react'
import axios from '../../axios';
import './Accueil.css';
import { Field, Form, Formik } from 'formik';
import history from '../../history'

import moment from 'moment';
import 'moment/locale/fr' 
moment.locale('fr');



export class Accueil extends Component {
    state =  {
        reservations:null,
        depart:null,
        retour:null,
        message:''
    }
    componentDidMount(){
      this.getReservation()
    }
    getReservation(){
        axios.get('/reservations').then(response => {
            if(response.status===200){
                this.setState({
                    message:response.data.message,
                    reservations:response.data.reservation,
                    depart: response.data.depart,
                    retour: response.data.retour
                })
            }
        })
    }
    rafraichir(){
        window.location.reload()
    }
    render() {
        return (
            <div>
                <div className="right_col" role="main">
                <div>
                   
                    
                    <div className="clearfix"></div>

                    <div className="row">
                    <div className="col-md-12">
                        <div className="contentGeneral">
                            <div class="panel2">
                                    <div class="x_title">
                                        <span className="titreG">Départs et Retours du jour</span>
                                        <span className="position-btn">
                                            <button className="btn-dep">Départs / Retours du jours</button>
                                        </span>
                                    </div>
                                    <div class="x_title">
                                        <span className="titreG">Départs et Retours 7 jour</span>
                                        <span className="position-btn">
                                            <button className="btn-dep">Départs / Retours 7 jours</button> 
                                        </span>
                                    </div>
                                    <div class="x_title">
                                        <span className="titreG">Départs et Retours 30 jour</span>
                                        <span className="position-btn"> 
                                            <button className="btn-dep">Masquer les Départs / Retours 30 jours <span className="number-text">X</span></button> 
                                        </span>
                                    </div>
                            <div className="x_content">
                                <div className="listeBtn">
                                    <ul className="contenu-btn">
                                        <li className="Value">
                                            <button className="btn-depart" onClick={e => this.getReservation()}>
                                                Départs/Retours
                                            </button>
                                        </li>
                                        <li className="Value"><button className="btn-departs">Départs</button></li>
                                        <li className="Value"> <button className="btn-departs">Retours</button> </li>
                                      
                                    </ul>
                                    <p className="nbr-depart">
                                        <span className="text-nbr">Nombre de départs :<span className="number-text">{this.state.depart}</span></span>
                                        <span className="text-nbr">-</span>
                                        <span className="text-nbr">Nombre de retours :<span className="number-text">{this.state.retour}</span></span>
                                    </p>
                                    <div className="recherche">
                                        <Formik 
                                            initialValues={{
                                                dateDepart: '',
                                                dateRetour: '',
                                            }}

                                            onSubmit={(values, { resetForm }) => {
                                                console.log(values)
                                                axios.get(`/reservations/recherche/${values.dateDepart}/${values.dateRetour}`).then(response => {
                                                    if (response.status===200){
                                                        this.setState({
                                                            message:response.data.message,
                                                            reservations:response.data.reservation,
                                                            depart: response.data.depart,
                                                            retour: response.data.retour
                                                        })
                                                    }
                                                })
                                            }} 
                                        >
                                            <Form>
                                            
                                                <label className="part-date">Trier par periode de retour,  du : </label>
                                                <Field type="date" name="dateDepart" />
                                                <label className="part-date">jusqu'au : </label>
                                                <Field type="date" name="dateRetour" />

                                                <span className="bouton">
                                                    <button type="submit" class="btn btn-secondary" id="bouton" data-toggle="tooltip" data-placement="left" title="Validation ">Rechercher</button>
                                                </span>
                                            </Form>

                                        </Formik>
                                    </div>
                                </div>
                                {this.state.reservations?(
                                    <div>
                                        <table className="table-accueil">
                                            <thead>
                                                <tr className="th-accueil">
                                                    <th>Véhicule</th>
                                                    <th>départ</th>
                                                    <th>Retour</th>
                                                    <th>Option</th>
                                                    <th>Total</th>
                                                    <th>Acompte</th>
                                                    <th>Nom</th>
                                                    <th>N° de Vol</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {Object.keys(this.state.reservations).map(reservation => (
                                            
                                            <>
                                            
                                                <tr>
                                                    <td colSpan="9">
                                                        <div className="date"><p>{moment(`${reservation.toString()}`).format('dddd Do MMMM YYYY')}</p></div>
                                                    </td>
                                                </tr>
                                            
                                            
                                                {Object.keys(this.state.reservations[reservation]).map(res =>(
                                                    
                                                        <tr key={res}>
                                                            <td>
                                                                <img className="img-voiture" src={`http://localhost:4000/${this.state.reservations[reservation][res][1].image.url}`} alt={this.state.reservations[reservation][res][1].marque}/>
                                                                {this.state.reservations[reservation][res][1].marque}
                                                            </td>
                                                            <td>
                                                                <div>{moment(`${this.state.reservations[reservation][res][0].date_depart.toString()}`).format('dddd Do MMMM YYYY')}</div>
                                                                <div>{this.state.reservations[reservation][res][0].heure_depart}</div>
                                                            </td>
                                                            <td>
                                                                <div>{moment(`${this.state.reservations[reservation][res][0].date_retour.toString()}`).format('dddd Do MMMM YYYY')}</div>
                                                                <div>{this.state.reservations[reservation][res][0].heure_retour}</div>
                                                            </td>
                                                            <td></td>
                                                            <td>{this.state.reservations[reservation][res][0].prix}€</td>
                                                            <td>100€</td>
                                                            <td>{this.state.reservations[reservation][res][2].nom}</td>
                                                            <td>{this.state.reservations[reservation][res][0].numero_vol}</td>
                                                            <td>Actions</td>
                                                        </tr>   
                                                ))}
                                            </>
                                        ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ):(<h3>Chargement</h3>)}
                            
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div> 
            </div>
        )
    }
}

export default Accueil;







  

