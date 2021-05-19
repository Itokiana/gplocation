import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../axios'
import moment from 'moment'
import './tarif.css'
import { NavLink } from 'react-router-dom';



class Tarif extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtre: []
        };
    }


    componentDidMount() {
        this.getfiltre()
    }
    getfiltre() {
        axios.get(`/filtreTarif`).then(response => {
            if (response.status === 200) {
                this.setState({
                    filtre: response.data
                });
                console.log(this.state.filtre)

            }
        });
    }
    deleteDate = (date) => {
        axios.delete(`/tarif_personalises/${date.id}`).then(response => {
            if (response.status === 204) {
                this.getfiltre();
            }
        })
    }


    Liste = () => {
        return (
            <>
                {
                    this.state.filtre.map(cat => {
                        return (
                            <>
                                <div className="p-2 border border-black" style={{ background: "dimGrey" }}>
                                    <div className="m-1 w-full h-10 bg-blue rounded p-2">
                                        <strong>{cat[0].name}
                                            <span style={{ float: "right" }}> Duree min Bs:{cat[0].duree_min_bs} jours- Dureé min MS: {cat[0].duree_min_ms} jours - Dureé min: {cat[0].duree_min_hs} jours
                                            </span>
                                        </strong>
                                    </div>
                                    <br />
                                    <Link to={`/ajouter_un_tarif/${(cat[0].id)}`}
                                        className="border border-green-100 bg-green-500 text-white rounded-md px-3 m-1 py-2 
                            transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                    >
                                        Ajouter Tarif pour {cat[0].name}
                                    </Link>
                                    {cat[1] ?
                                        cat[1].map(tarif => {
                                            return (
                                                <>
                                                    <div className="py-4">
                                                        <div className="mt-2">
                                                            <div>
                                                                <h3>
                                                                    Du <strong>{moment(tarif[0].datedebutperso).format('D MMMM Y')}</strong>
                                                            au <strong>{moment(tarif[0].datefinperso).format('D MMMM Y')}
                                                                    </strong>
                                                                    <button className="text-white rounded m-2 bg-red-600 p-1" style={{ float: "right" }} onClick={() => this.deleteDate(tarif[0])}>
                                                                        Supprimer
                                                            </button>
                                                                </h3>
                                                                <br />
                                                            </div>

                                                            <table className="table text-white table-striped jambo_table bulk_action border-black">
                                                                <thead className="bg-blue">
                                                                    {tarif.map(val => {
                                                                        return (
                                                                            <>
                                                                                <th>
                                                                                    <span className="text-black">{val.jourdebut} au {val.jourfin} Jour</span>
                                                                                </th>
                                                                            </>
                                                                        )
                                                                    })}
                                                                </thead>
                                                                <tbody className="">
                                                                    <tr>
                                                                        {tarif.map(cat => {
                                                                            return (
                                                                                <>
                                                                                    <td className="">
                                                                                        <u>{cat.prix}</u> <br />€/jours
                                                                        </td>
                                                                                </>
                                                                            )
                                                                        })}
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                        : null}

                                </div>
                                <br />
                                <br />
                            </>
                        )
                    })
                }
            </>
        )
    }
    render() {
        return (
            <>
                <div>
                    <NavLink to="/configuration_agence" >
                        <button style={{ float: "left", margin: "10px" }} class="text-white bg-indigo-500 border-0 hover:bg-indigo-600 font-bold py-2 px-4 rounded">Retour</button>
                    </NavLink>
                    <center>
                        <br />
                        <h1 className="text-white">TARIF PERSONNALISER</h1>
                        <br /><br />
                    </center>

                    <br />
                    {this.Liste()}
                </div>
            </>
        )
    }
}

export default Tarif
