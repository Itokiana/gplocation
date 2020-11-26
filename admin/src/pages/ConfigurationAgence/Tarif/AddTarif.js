import React, { Component, setSate } from 'react'
import { Formik, Form, Field } from 'formik';
import axios from '../../../axios';


class AddTarif extends Component {
    
    state = {
        categories: [],
        voiture: []
    };

    componentDidMount() {
		this.getCategories();
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
        return (
            <>
                <center>
                    <h1>Tarif personnaliser pour le categorie {category && category.category }, reference {category && category.ref}</h1>
                    <br/>
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
                            date_debut: '',
                            date_fin: '',
                            prix1: '',
                            prix2: '',
                            prix3: '',
                            prix4: '',
                            prix5: '',
                            prix6: '',
                            
                            category_id: `${this.props.match.params.id}`
                        }}

                        onSubmit={(values, { resetForm }) => {
                            axios.post('/tarifs', values)
                            .then(response => {
                                if (response.status === 200) {
                                    resetForm(); 
                                    
                                    this.setState({
                                        voiture: response.data
                                    })
                                }
                                console.log(values)
                            })
                       
                        }}
                    
                    >
                        <Form className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                Du :
                            </label>
                            <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 
                            px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="date" name="date_debut"/>
                            
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Au
                            </label>
                            <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 
                            px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date" name="date_fin"/>
                            </div>
                            
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                    1 jour en £/jour
                                </label>
                                <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
                                py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="prix1" type="number"/>
                            </div>

                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                    2 jours en £/jour
                                </label>
                                <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
                                py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="prix2" type="number"/>
                            </div>

                            {/* <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                    3 jours en £/jour
                                </label>
                                <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
                                py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="prix3" type="number"/>
                            </div>
                                <br/>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                    4-7 jours en £/jour
                                </label>
                                <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
                                py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="prix4" type="number"/>
                            </div>

                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                    14 jours en £/jour
                                </label>
                                <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
                                py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="prix5" type="number"/>
                            </div>

                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                    +30 jours en £/jour
                                </label>
                                <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
                                py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="prix6" type="number"/>
                            </div> */}
                
                            <button
                                type="submit"
                                className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 
                                transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                            >Valider</button>
                            
                        </Form>
                    
                    </Formik>
                </div>
                </center>
                
            </>
        )
    }
}

export default AddTarif;
