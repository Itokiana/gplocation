import React, { Component } from 'react';
import AddVoiture from './AddVoiture';
import ListeVoiture from './ListeVoiture';
import axios from '../../axios';

import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';


class Voitures extends Component {
    state = {
        addNew: false,
        voitures: []
    }

    action = {
        toggleModal: (value) => {
            this.setState({ addNew: value })
        },
        getVoiture: () => {
            axios.get('/voitures').then(response => {
                // if (response.status === 200) {
                //     this.setState({
                //         voitures: response.data
                //     })
                // }
            })
        },
        deleteVoiture: (voiture) => {
            axios.delete(`/voitures/${voiture.id}`).then(response => {
                if (response.status === 204) {
                    this.action.getVoiture();
                }
            })
        }
    }


    render() {
        // Récupération de la variable voiture depuis le state
        const { addNew, voitures } = this.state;
        return (

            <div className="p-5">
                <NavLink to="/configuration_agence" >
                    <button class="text-white bg-indigo-500 border-0 hover:bg-indigo-600 font-bold py-2 px-4 rounded">Retour</button>
                </NavLink>
                <h1 className="mb-2 sm:text-4xl text-3xl font-medium title-font text-center text-gray-900">Gestion des voitures</h1>
                <button
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
                    onClick={() => this.action.toggleModal(true)}>Nouvelle voiture</button>
                <ListeVoiture
                    action={{ ...this.action }}
                    voitures={voitures} />
                <Modal
                    isOpen={addNew}
                    className="modal-modern">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title">
                                <h2>Insertion d'une nouvelle voiture</h2>
                            </div>
                            <div
                                onClick={() => this.setState({ addNew: false })}
                                className="modal-close">X</div>
                        </div>
                        <hr className="my-4" />


                        <AddVoiture
                            action={{ ...this.action }} />
                    </div>
                </Modal>

                <NavLink to={'/parcourir'}>
                    <button
                        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
                    >Parcourir</button>
                </NavLink>
            </div>

        )
    }
}


export default Voitures;
