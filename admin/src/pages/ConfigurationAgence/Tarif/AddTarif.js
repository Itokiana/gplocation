import React, { Component, setSate } from 'react'
import { Formik, Form, Field } from 'formik';
import UnPrix from './UnPrix';
import axios from '../../../axios';

import { NavLink } from 'react-router-dom';


class AddTarif extends Component {
    
    state = {
        categories: [],
        voiture: [],
        nombreLigne: [1,2]

    };
    

    componentDidMount() {
        this.getCategories();
        
    }
    ajoutNewPeriod =() =>{
        this.setState({
            nombreLigne: [
                ...this.state.nombreLigne,this.state.nombreLigne.pop() + 1
            ]
        })
        
    }
    suprimerPeriode = () =>{
        this.setState({
           
            nombreLigne: this.state.nombreLigne
        })
    }
    
	getCategories = () => {
		axios.get(`/categories/${this.props.match.params.id}`).then(response => {
			if (response.status === 200) {
				this.setState({
					categories: response.data
				});
				console.log(this.state.categories);
			}
		});
    };
   

    render() {
       
        const category = this.state.categories.category
        const voitures = this.state.categories.voitures
        const idcat = this.state.categories.id
        console.log(voitures)
        return (
            <>
                <center>
                    <h1>Tarif personnaliser pour le categorie {category && category.category }, reference {category && category.ref}</h1>
                    <br/>
                    {/* <NavLink to={`/jours`}>
                        <td className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded">Ajouter Nombrejour euro/j</td>
                    </NavLink> */}
                    <div>
                        {voitures && voitures.map(voiture => {
                            return (
                                <>
                                    <fieldset>
                                        <img src={`http://localhost:4000/${voiture.image.url}`} /><br/>
                                    </fieldset>
                                    <p>{voiture.model}</p>
                                </>
                            )
                        })}
                    </div>
                    <div className="w-full max-w-lg text-justify">
                        <Formik
                            initialValues={{
                                category_id: `${this.props.match.params.id}`,
                                dateDebutPerso:'',
                                dateFinPerso:'',
                                
                            }}
                            onSubmit={(data,{setSubmitting})=>{
                                setSubmitting(true);
                                                    
                                axios.post('/tarif_personalises',{data, tabLigne:this.state.nombreLigne})
                                console.log(data)
                                setSubmitting(false)
                            }}>

                            <Form className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                        Du :
                                    </label>
                                    <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 
                                    px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="date" name="dateDebutPerso"/>
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                        Au
                                    </label>
                                    <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 
                                px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date" name="dateFinPerso"/>
                                </div>
                                <div className="row">
                                {
                                    this.state.nombreLigne.map((ligne) => 
                                        <UnPrix key={ligne} num={ligne} />
                                        )
                                }
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button
                                        type="submit"
                                        className="border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 
                                        transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline" 
                                        onClick={this.ajoutNewPeriod}
                                    >
                                        Ajouter un ligne
                                    </button>
                                    {/* <button
                                        type="submit"
                                        className="border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 
                                        transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline" 
                                        onClick={this.suprimerPeriode}
                                    >
                                        Supprimer un ligne
                                    </button> */}
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
                </center>
                
            </>
        )
    }
}

export default AddTarif;
