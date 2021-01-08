import React, { Component, setStat} from 'react'
import axios from '../../../axios'
import { Formik, Form, Field } from 'formik';
import moment from 'moment' ;
import { NavLink } from 'react-router-dom';

// import Listesaison from './Listesaison';

class AddSaison extends Component {
    
    state = {

        saison : [],
        datesaison : [],
        date: ''
    }
    
    componentDidMount() {
        this.action.getSaison();
        this.action.getDateSaison();
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
        getDateSaison: () => {
            axios.get(`/date_saisons`).then(response => {
                if (response.status === 200) {
                    this.setState({
                        datesaison: response.data,
                        
                    });
                   // console.log(datesaison);
                }
            });
        },
        
        deleteSaison: (date) => {
            axios.delete(`/date_saisons/${date.id}`).then(response => {
                if (response.status === 204) {
                    this.action.getDateSaison();
                }
            })
        }
    } 
    render() {
        const saisone = this.state.saison.nomsaison
        const date = this.state.datesaison
        const fi = date.filter(person => person.saison_id == this.props.match.params.id);
        
        return (
            <>  
                <NavLink to="/tarif" >
                    <button style= {{float:"right" ,margin:"50px"}} class="text-white bg-indigo-500 border-0 hover:bg-indigo-600 font-bold py-2 px-4 rounded">Retour</button>
                </NavLink>
                <h2 style= {{color: "blue"}}>{saisone}</h2>
                <br/><h3>Ajouter nouvelle periode nesessaire</h3><br/>
                <div className="w-full max-w-lg text-justify">
                    <Formik
                        initialValues={{
                            saison_id: `${this.props.match.params.id}`,
                            debutsaison:'',
                            finsaison:''
                            
                        }}
                        
                        onSubmit={(data,{setSubmitting})=>{
                            setSubmitting(true);
                                                
                            axios.post('/date_saisons',data)
                            console.log(data)
                            this.action.getDateSaison();
                            setSubmitting(false)
                        }
                    }
                    >
                        <Form className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                        Du :
                                    </label>
                                    <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 
                                    px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="date" name="debutsaison"/>
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
                                        Au
                                    </label>
                                    <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 
                                px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date" name="finsaison"/>
                                </div>

                                <div className="d-flex justify-content-end">
                                    
                                    <button
                                        type="submit"
                                        className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 
                                        transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                    >
                                        Valider
                                    </button>
                                </div>
                                
                        </Form>
                        

                    </Formik>
                    
                </div>
                {/* <Listesaison id={this.props.match.params.id} ></Listesaison> */}

                {/* Liste de saison en date */}
                
                
                <div className="py-4">
                    <h2>Periode</h2>
                    <div className="mt-2">
                        <table class="table table-condensed">
                            <tbody>
                                { fi.map(dtesaison => {
                                    return (
                                        <tr>
                                            <td ><span className="text-white">Du  <strong>{moment(dtesaison.debutsaison).format('D MMMM Y')}</strong>   au   <strong>{moment(dtesaison.finsaison).format('D MMMM Y')}</strong></span></td>
                                            <td ><span className="text-red-500 cursor-pointer" onClick={() => this.action.deleteSaison(dtesaison)}>Supprimer</span></td>
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
export default AddSaison