import React, { Component } from 'react'
import axios from '../../axios';
import './Accueil.css';
import moment from 'moment';
import 'moment/locale/fr' 
moment.locale('fr');


export class Accueil extends Component {
    state =  {
        reservations:null,
    }
    componentDidMount(){
        axios.get('/reservations').then(response => {
            if(response.status===200){
                this.setState({
                    reservations:response.data,
                })
                console.log(response.data)

            }
        })
    }
    render() {
        return (
            <div>
                        <div class="right_col" role="main">
                <div class="">
                   
                    
                    <div class="clearfix"></div>

                    <div class="row">
                    <div class="col-md-12">
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
                            <div class="x_content">
                                <div className="listeBtn">
                                    <ul className="contenu-btn">
                                        <li className="Value"><button className="btn-depart">Départs/Retours</button></li>
                                        <li className="Value"><button className="btn-departs">Départs</button></li>
                                        <li className="Value"> <button className="btn-departs">Retours</button> </li>
                                      
                                    </ul>
                                    <p className="nbr-depart">
                                        <span className="text-nbr">Nombre de départs :<span className="number-text">7</span></span>
                                        <span className="text-nbr">-</span>
                                        <span className="text-nbr">Nombre de retours :<span className="number-text">23</span></span>
                                    </p>
                                </div>
                                 {/* <span className="btn-depart">Départs/Retours</span> &nbsp;
                                  <span className="btn-departs">Départs</span> &nbsp;
                                  <span className="btn-departs">Retours</span> &nbsp;
                                  <span>Nombre de départs :<span>7</span></span> &nbsp;
                                  <span> - Nombre de retours :<span>23</span></span> */}
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
                                    </table>
                                    {Object.keys(this.state.reservations).map(reservation => (
                                       <>
                                        <div>      
                                            <div className="date"><p>{moment(`${reservation.toString()}`).format('dddd Do MMMM YYYY')}</p></div>
                                            {console.log(this.state.reservations[reservation])}
                                            {Object.keys(this.state.reservations[reservation]).map(res =>(
                                                <table className="table-data">
                                                <tbody>
                                                    <tr>
                                                        <td>{this.state.reservations[reservation][res][1].marque}</td>
                                                        <td>{moment(`${this.state.reservations[reservation][res][0].date_depart.toString()}`).format('dddd Do MMMM YYYY')}</td>
                                                        <td>{moment(`${this.state.reservations[reservation][res][0].date_retour.toString()}`).format('dddd Do MMMM YYYY')}</td>
                                                        <td>Option</td>
                                                        <td>Total</td>
                                                        <td>Acompte</td>
                                                        <td>Nom</td>
                                                        <td>{this.state.reservations[reservation][res][0].numero_vol}</td>
                                                        <td>Actions</td>
                                                    </tr>   
                                                </tbody>
                                            </table>
                                            ))}
                                            
                                        </div>
                                        </>
                                    ))}
                                   
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







  

