import React, { Component } from 'react';
import Caracteristique from './Caracteristique';
import DureeLocation from './DureeLocation';
import GestionTarifAgence from './GestionTarifAgence';
import GestionOption from './GestionOption';
import { NavLink } from 'react-router-dom';


export default class Editer extends Component {
    state = {
        etape: 0
    };

    changerEtape = (newEtape) => {
        this.setState({
            etape: newEtape
        });
    }

    //     onClick = {() => this.changerEtape(2)}
    // { etape === 2 ? (<Caracteristique />) : null }
    render() {
        const etape = this.state.etape
        return (
            <div><section className="text-gray-500 ">
                <div className="container mx-auto flex-wrap">
                    <div className="relative flex-col text-center w-full">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-black">Editer</h1>
                    </div>
                    <div>
                        <div>

                            <div className="flex rounded-lg h-full bg-gray-800 p-5 flex-col">
                                <div className="flex">
                                    <button onClick={() => this.changerEtape(1)}>
                                        <div className="flex items-center mb-3">
                                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            </div>
                                            <h2 className="text-white text-lg title-font font-medium">Caractéristiques du produit</h2>
                                        </div>

                                    </button>
                                    <button onClick={() => this.changerEtape(1)}>
                                        <div>
                                            <h2 className="text-red-500 text-lg title-font font-medium">Valider les modifications</h2>
                                        </div>

                                    </button>
                                </div>
                                {etape === 1 ? (<Caracteristique />) : null}

                            </div><br />
                            <div className="flex rounded-lg h-full bg-gray-800 p-5 flex-col">
                                <button onClick={() => this.changerEtape(2)}>
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        </div>
                                        <h2 className="text-white text-lg title-font font-medium">Durée de location</h2>
                                    </div>

                                </button>
                                {etape === 2 ? (<DureeLocation />) : null}
                            </div><br />

                            <div className="flex rounded-lg h-full bg-gray-800 p-5 flex-col">
                                <button onClick={() => this.changerEtape(3)}>
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">

                                        </div>
                                        <h2 className="text-white text-lg title-font font-medium">Gestion des tarifs agence</h2>
                                    </div>

                                </button>
                                {etape === 3 ? (<GestionTarifAgence />) : null}
                            </div><br />

                            <div className="flex rounded-lg h-full bg-gray-800 p-5 flex-col">
                                <button onClick={() => this.changerEtape(4)}>
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">

                                        </div>
                                        <h2 className="text-white text-lg title-font font-medium">Gestion des options</h2>
                                    </div>

                                </button>
                                {etape === 4 ? (<GestionOption />) : null}
                            </div><br />
                        </div>
                    </div>
                </div>
            </section>




            </div >
        )
    }
}
