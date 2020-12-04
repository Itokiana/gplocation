import React, { Component, setStat} from 'react'
import axios from '../../../../../axios'
import { Formik, Form, Field } from 'formik';

class GestionOF extends Component {
    
    state = {

        horaire : [],
        datesaison : [],
        date: ''
    }
    
    componentDidMount() {
        this.action.getHoraire();
    }
    action = {
        getHoraire: () => {
            axios.get(`/horaire_jours`).then(response => {
                if (response.status === 200) {
                    this.setState({
                        horaire: response.data
                    });
                    console.log(this.state.horaire);
                }
            });
        },
        
        deleteSaison: (heure) => {
            axios.delete(`/horaire_jours/${heure.id}`).then(response => {
                if (response.status === 204) {
                    this.action.getDateSaison();
                }
            })
        }
    } 
    render() {
        return (
            <>
                <div className="row">
                    <Formik
                        initialValues={{
                            nomjour: '',
                            heuredebut:'',
                            heurefin:'',
                            prixsurplus:''
                            
                        }}
                        
                        onSubmit={(data,{setSubmitting})=>{
                            setSubmitting(true);
                                                
                            axios.post('/horaire_jours',data)
                            console.log(data)
                            setSubmitting(false)
                        }
                    }
                    >
                        <Form class="d-flex align-items-start">
                                    <div className="w-full md:w-1/4 px-3">
                                        <label className="block red tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                            Le :
                                        </label>
                                        <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 
                                        px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="nomjour"/>
                                    </div>
                                    <div className="w-full md:w-1/6 px-3">
                                        <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                            Entre
                                        </label>
                                        <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 
                                    px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="time" name="heuredebut"/>
                                    </div>
                                    <div className="w-full md:w-1/6 px-3">
                                        <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                            et
                                        </label>
                                        <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 
                                    px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="time" name="heurefin"/>
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block tracking-wide text-gray-700 text-xs font-blue mb-2" htmlFor="grid-last-name">
                                            Surplus
                                        </label>
                                        <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 
                                    px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" name="prixsurplus"/>
                                    </div>

                                    <div className="w-full md:w-1/2 px-3">
                                        
                                        <button
                                            type="submit"
                                            className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 
                                            transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                        >
                                            Ajouter
                                        </button>
                                    </div>
                                    
                            </Form>
                        

                    </Formik>
                    
                </div>

                {/* Liste des jour par heure */}
                
                
                <div className="py-4">
                    <h2>Periode</h2>
                    <div className="mt-2">
                        <table class="table table-condensed">
                            <tbody>
                                { this.state.horaire.map(heure => {
                                    return (
                                        <tr>
                                            <td ><span className="text-blue-500">Du  { heure.heuredebut }   au   {heure.heurefin}</span></td>
                                            <td ><span className="text-red-500 cursor-pointer" onClick={() => this.action.deleteSaison(heure)}>Supprimer</span></td>
                                        </tr>
                                    )
                                }) }
                                
                            </tbody>
                        </table>
                    </div>
                    
                    {/* { utilisateurs && utilisateurs.length === 0 ? (<>Aucun utilisateur disponible pour le moment.</>) : null } */}
                    
                    
                </div>
            </>
        )
    }
}
export default GestionOF