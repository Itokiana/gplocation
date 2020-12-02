import React, { Component, setStat} from 'react'
import axios from '../../../axios'
import ListSaison from './ListSaison'
import AjoutSaison from './AjoutSaison'
import { Formik, Form, Field } from 'formik';

class AddSaison extends Component {
    state = {

        saison : []
    }
    componentDidMount() {
        this.action.getSaison();
    }
    action = {
        getSaison: () => {
            axios.get(`/saisons/${this.props.match.params.id}`).then(response => {
                if (response.status === 200) {
                    this.setState({
                        saison: response.data
                    });
                    console.log(this.state.saison);
                }
            });
        },
        
        deleteUtilisateur: (saisone) => {
            axios.delete(`/saisons/${saisone.id}`).then(response => {
                if (response.status === 204) {
                    this.action.getSaison();
                }
            })
        }
    } 
    render() {
        const saisone = this.state.saison.nomsaison
        return (
            <>
                <h2 style= {{color: "red"}}>{saisone}</h2>
                <br/>Ajouter nouvelle periode nesessaire<br/>
                <div className="w-full max-w-lg text-justify">
                    <AjoutSaison 
                        action={{ ...this.action}}
                        id= {`${this.props.match.params.id}`}
                        />
                </div>
            </>
        )
    }
}
export default AddSaison