import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Detail from './Detail/Detail';
import './Reservation.css';
import Checkbox from '@material-ui/core/Checkbox';


class Reservation extends Component {
    constructor(props) {
        super(props)
        const prix = [];

        this.state = {
            etape: 1,
            prixVoiture: this.props.prix,
            checksiege: [],
            checkrehausse: [],
            checkcovd: true,
            gps: true,
            modalShow: false,
            items: null,

        }

    }
    componentDidMount() {

        let it = [];
        let check = []
        this.props.voitures.map((v) => {
            let i = {}
            let j = {}
            j['num'] = 0 
            i['id'] = v.id
            i['showModal'] = false
            it.push(i)
            check.push(j)
        })
        this.setState({ prixVoiture: this.props.prix, items: it , checksiege: check, checkrehausse: check})
    }

    componentDidUpdate(previousProps, previousState) {
        if (previousProps.prix !== this.props.prix) {
            this.setState({ prixVoiture: this.props.prix })
        }
    }
    siege(e, v) {
        let prixsieg1 = this.state.prixVoiture
        let siege1 = this.state.checksiege
        let prixsieg2 = []
        let siege2 = []

        prixsieg1.map(valeur => {
            prixsieg2.push(valeur)
        })
        siege1.map(s => {
            siege2.push(s)
        })

        

        if (siege2[v].num === '1') {
            prixsieg2[v] = prixsieg1[v] - 9
        } else if (siege2[v].num === '2') {
            prixsieg2[v] = prixsieg1[v] - 18
        } else if (siege2[v].num === '3') {
            prixsieg2[v] = prixsieg1[v] - 27
        } else {
            prixsieg2[v] = prixsieg1[v]
        }

        let prix1 = prixsieg2
        let prix2 = []
        prix1.map(valeur => {
            prix2.push(valeur)
        })

        if (e.target.value === '1') {
            siege2[v].num = '1'
            prix2[v] = prix1[v] + 9
        } else if (e.target.value === '2') {
            siege2[v].num = '2'
            prix2[v] = prix1[v] + 18
        } else if (e.target.value === '3') {
            prix2[v] = prix1[v] + 27
            siege2[v].num = '3'
        } else {
            prix2[v] = prix1[v]
            siege2[v].num = 0
        }
        
        this.setState({
            prixVoiture: prix2,
            checksiege: siege2
        })
    }

    rehausseur(e, v) {
        let prixreh1 = this.state.prixVoiture
        let rehausse1 = this.state.checkrehausse
        let rehausse2 = [] 
        let prixreh2 = []

        prixreh1.map(valeur => {
            prixreh2.push(valeur)
        })

        rehausse1.map(j =>{
            rehausse2.push(j)
        })

        if (rehausse2[v].num === '1') {
            prixreh2[v] = prixreh1[v] - 9
        } else if (rehausse2[v].num === '2') {
            prixreh2[v] = prixreh1[v] - 18
        } else if (rehausse2[v].num === '3') {
            prixreh2[v] = prixreh1[v] - 27
        } else {
            prixreh2[v] = prixreh1[v]
        }

        let prix1 = prixreh2
        let prix2 = []

        prix1.map(valeur => {
            prix2.push(valeur)
        })

        if (e.target.value === '1') {
            prix2[v] = prix1[v] + 9
            rehausse2[v].num = '1'
        } else if (e.target.value === '2') {
            prix2[v] = prix1[v] + 18
            rehausse2[v].num = '2'
        } else if (e.target.value === '3') {
            prix2[v] = prix1[v] + 27
            rehausse2[v].num = '3'
        } else {
            prix2[v] = prix1[v]
            rehausse2[v].num = 0
        }
        this.setState({
            prixVoiture: prix2,
            checkrehausse: rehausse2

        })
    }

    changerEtape = (newEtape) => {
        this.setState({
            etape: newEtape
        });
    }

    getAcompt(prix) {

        if (prix >= 0 && prix <= 150) {
            return prix

        } else if (prix > 150 && prix < 500) {
            return 100

        } else if (prix >= 500 && prix <= 999) {
            return 200
        } else if (prix > 999 && prix <= 1999) {
            return 300

        } else {
            return 400
        }

    }

    getKey(val, map) {
        return Object.keys(map).find(key => map[key] === val);

    }
    handleModalHide = () => {
        let items = this.state.items
        items[0].showModal = false
        this.setState({ items: items })

    }

    test = () => {
        let items = this.state.items
        items[0].showModal = true
        this.setState({ items: items })
    }
    covidtest(event, v) {

        let ch = event.target.checked


        let prix1 = this.state.prixVoiture
        let prix2 = []
        prix1.map(valeur => {
            prix2.push(valeur)
        })

        if (ch === true) {
            prix2[v] = prix1[v] + 10
            this.setState({ prixVoiture: prix2 })
        } else {
            prix2[v] = prix1[v] - 10
            this.setState({ prixVoiture: prix2 })
        }

    }


    gpstest(event, v) {

        let ch = event.target.checked


        let prix1 = this.state.prixVoiture
        let prix2 = []
        prix1.map(valeur => {
            prix2.push(valeur)
        })

        if (ch === true) {
            prix2[v] = prix1[v] + 27
            this.setState({ prixVoiture: prix2 })
        } else {
            prix2[v] = prix1[v] - 27
            this.setState({ prixVoiture: prix2 })
        }

    }


    render() {
        const etape = this.state.etape;
        
        sessionStorage.setItem("date_depart", JSON.stringify(this.props.date_reservation.dateDepart))
        sessionStorage.setItem("date_retour", JSON.stringify(this.props.date_reservation.dateRetour))
        sessionStorage.setItem("heure_depart", JSON.stringify(this.props.date_reservation.heureDepart))
        sessionStorage.setItem("heure_retour", JSON.stringify(this.props.date_reservation.heureRetour))
        sessionStorage.setItem("lieu_depart", JSON.stringify(this.props.date_reservation.lieuDepart))
        sessionStorage.setItem("lieu_retour", JSON.stringify(this.props.date_reservation.lieuRetour))

        return (

            <div>
                {
                    this.props.voitures && this.props.date_reservation && this.state.items && this.props.prix ? (
                        <>
                            {this.props.voitures.map((voiture, num) => {
                                // console.log('uuu', this.state.items)
                                return (<div key={voiture.id}>
                                    <section className="b-items s-shadow" id="padingReserver">
                                        <div className="container">
                                            <div className="row"><div><span className="spinner"></span></div>
                                                <div className="col-lg-12 col-sm-12 col-xs-12">
                                                    <ul className="carac-prod">
                                                        <li className="imagePading"><span className="imagePading"><img src="media/blog/1.png" alt="nissan" /></span>Essence</li>
                                                        <li className="imagePading"><span className="imagePading"><img src="media/blog/2.jpg" alt="nissan" /></span>{voiture.vitesse}</li>
                                                        <li className="imagePading"><span className="imagePading"><img src="media/blog/3.jpg" alt="nissan" /></span>Climatisation: {voiture.climatisation}</li>
                                                        <li className="imagePading"><span className="imagePading"><img src="media/blog/4.jpg" alt="nissan" /></span>{voiture.places} places</li>
                                                        <li className="imagePading"><span className="imagePading"><img src="media/blog/5.png" alt="nissan" /></span>{voiture.portes} portes</li>
                                                    </ul>
                                                    <div className="b-items__cars">
                                                        <div className="b-items__cars-one wow zoomInUp" data-wow-delay="0.5s">
                                                            <div className="b-items__cars-one-img">
                                                                <img className="img-responsive" src={`http://fd0b515.online-server.cloud/${voiture.image.url}`} alt={voiture.marque}/>
                                                                <br />
                                                                {
                                                                    this.props.stock[this.getKey(voiture, this.props.voitures)] === 1 ? <p className="laststock">Dernier vehicule en stock</p> : <p className='laststock1'>Stock restant : {this.props.stock[this.getKey(voiture, this.props.voitures)]}</p>
                                                                }

                                                                <span className="confirm-tarif ">
                                                                    {this.state.prixVoiture[num]}
                                                                </span>
                                                                <p className="montant-acompte">dont {this.getAcompt(this.state.prixVoiture[num])} € d'acompte</p>
                                                            </div>
                                                            <div className="b-items__cars-one-info">
                                                                <header className="b-items__cars-one-info-header s-lineDownLeft" id="head">
                                                                    <h2>{voiture.marque}</h2>
                                                                    <Link
                                                                        to={`/reserver/${this.props.signe[this.getKey(voiture, this.props.voitures)]}/${voiture.id}/${this.state.prixVoiture[num]}/${this.getAcompt(this.state.prixVoiture[num])}`}
                                                                        type="submit"
                                                                        className="btn m-btn"
                                                                        id="bouttonReserve"
                                                                    >
                                                                        Réserver<span className="fa fa-angle-right" id="bgColor"></span>
                                                                    </Link>

                                                                </header>
                                                                <div className="b-blog__posts-one-info">
                                                                    <div className="row">
                                                                        <div className="col-lg-6 col-sm-6 col-xs-12">

                                                                            <h4 className="titre-7">Choisissez vos options :</h4>
                                                                            <div className=''>
                                                                                <Checkbox onClick={(e) => { this.covidtest(e, num) }} name='covid' className='' color="primary" />
                                                                                <span className="Annulation">Annulation Covid (voir détails) : </span>
                                                                                <span className="cout">10.00 €</span>
                                                                            </div>

                                                                            <div className="contenue-1">

                                                                                <select>
                                                                                    <option value="0">0</option>
                                                                                    <option value="1">1</option>
                                                                                    <option value="2">2</option>
                                                                                    <option value="3">3</option>
                                                                                </select>

                                                                                <span className="conducteur">Conducteur additionnel  :</span><span className="gratuit">Gratuit</span>

                                                                                <div className="ddOutOfVision" id="2-produit_61_msddHolder" >
                                                                                    <select onClick={e => this.siege(e, num)}>
                                                                                        <option value="0">0</option>
                                                                                        <option value="1">1</option>
                                                                                        <option value="2">2</option>
                                                                                        <option value="3">3</option>
                                                                                    </select>
                                                                                    <span className="Annulation">Siège bébé (de 0 à 3 ans)  : </span>
                                                                                    <span className="cout-1">9.00 €</span>
                                                                                </div>
                                                                                <div className="ddOutOfVision" id="3-produit_61_msddHolder" >
                                                                                    <select onClick={e => this.rehausseur(e, num)}>
                                                                                        <option value="0">0</option>
                                                                                        <option value="1">1</option>
                                                                                        <option value="2">2</option>
                                                                                        <option value="3">3</option>
                                                                                    </select>
                                                                                    <span className="Annulation"> Réhausseur (à partir de 3 ans) : </span>
                                                                                    <span className="cout-2">9.00 €</span>
                                                                                </div>
                                                                                <Checkbox onClick={(e) => { this.gpstest(e, num) }} name='gps' className='' color="primary" />
                                                                                <span className="Annulation">GPS : </span>
                                                                                <span className="optionresult">27.00 €</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6 col-sm-6 col-xs-12">
                                                                            <div className="avantage">
                                                                                <ul className="option ">
                                                                                    <li className="liste">
                                                                                        <svg width="2em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle-fill" fill="#228dcb " xmlns="http://www.w3.org/2000/svg">
                                                                                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z" />
                                                                                        </svg>
                                                                                        <span className="Prise">Prise en charge à l'aéroport</span>
                                                                                    </li>
                                                                                    <li className="liste">
                                                                                        <svg width="2em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle-fill" fill="#228dcb " xmlns="http://www.w3.org/2000/svg">
                                                                                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z" />
                                                                                        </svg>
                                                                                        <span className="option">Kilométrage illimité</span>
                                                                                    </li>
                                                                                    <li className="liste">
                                                                                        <svg width="2em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle-fill" fill="#228dcb " xmlns="http://www.w3.org/2000/svg">
                                                                                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z" />
                                                                                        </svg>
                                                                                        <span className="option">Assurance tous risques avec franchise</span>
                                                                                    </li>
                                                                                    <li className="liste">
                                                                                        <svg width="2em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle-fill" fill="#228dcb " xmlns="http://www.w3.org/2000/svg">
                                                                                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z" />
                                                                                        </svg>
                                                                                        <span className="option"> Carburant : plein à rendre plein</span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="b-items__cars-one-info-details">

                                                                    <button type="submit" onClick={this.test} className="btn m-btn" style={{ background: 'gray', color: 'white' }} id="buttonDetail ">Détails<span className="fa fa-angle-right" id="bgDetail"></span></button>


                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                    </section>
                                </div>
                                )
                            }

                            )}
                            {this.state.items.map(j => {
                                return (
                                    <Detail
                                        show={j.showModal}
                                        onHide={this.handleModalHide}
                                    />

                                )

                            })}
                        </>) : null
                }
                <br />
                <div></div>
            </div>
        )
    }
}
export default Reservation;