import React, { Component, setSate } from 'react'
import { Formik, Form, Field } from 'formik';
import UnPrix from './UnPrix';
import axios from '../../../axios';
import moment from 'moment' ;


import { NavLink } from 'react-router-dom';


class AddTarif extends Component {
    
    state = {
        categories: [],
        voiture: [],
        nombreLigne: [1,2,3],
        tarifperso: [],
        dateTarif: []

    };
    action = {
        getTarifPerso: () => {
            axios.get(`/prixjourpersos`).then(response => {
                if (response.status === 200) {
                    this.setState({
                        tarifperso: response.data
                    });
                    console.log(this.state.tarifperso);
                }
            });
        },
        getDate: () => {
            axios.get(`/datetarifpersos`).then( res => {
                if (res.status === 200) {
                    this.setState({
                        dateTarif: res.data
                    });
                    console.log(this.state.dateTarif);
                }

            })
        },
     
        deleteTarifPerso: (tarif) => {
            axios.delete(`/prixjourpersos/${tarif.id}`).then(response => {
                if (response.status === 204) {
                    this.action.getTarifPerso();
                }
            })
        },
        deleteDate: (date) => {
            axios.delete(`/datetarifpersos/${date.id}`).then(response => {
                if (response.status === 204) {
                    this.action.getDate();
                }
            })
        }  

    }
    

    componentDidMount() {
        this.getCategories();
        this.action.getTarifPerso();
        this.action.getDate();
        
        
    }
    ajoutNewPeriod =() =>{
        this.setState({
            nombreLigne: [
                ...this.state.nombreLigne,this.state.nombreLigne.pop() + 1
            ]
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
        console.log(this.props.match.params.id)
        const trie = this.state.tarifperso.filter(person => person.category_id == this.props.match.params.id);
        console.log(trie)
        const datePrix = []
        trie.map(uni => {
            datePrix.push(uni.datetarifperso_id)
        })
        var unique =datePrix.filter((v, i, a) => a.indexOf(v) === i);
        //console.log("tab unique " + unique.length + "tab" + unique)
        for (var i = 0; i< unique.length; i++){
            var tab$i = []

            trie.map(val => {
                if (val.datetarifperso_id == unique[i]){
                    tab$i.push(val)
                }
            })
        // console.log("tab de " + "tab"+i +"=")
        // console.log(tab$i)
        }
        
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
                                                    
                                axios.post('/prixjourpersos',{data, tabLigne:this.state.nombreLigne})
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
                 
                <div className="py-4">
                    
                    <div className="mt-2">
                    
                    
                        {unique.map((val, key)=> {
                            const trieDate = trie.filter(person => person.datetarifperso_id == val );

                            
                            return(
                                <>
                                
                                    {this.state.dateTarif.map((valeur, k)=>  {
                                        if(val==valeur.id){
                                            // const trieDate = trie.filter(
                                            //     date => date. == this.props.match.params.id);

                                            console.log(valeur)
                                            return(<>
                                                <h3>

                                                    Du <strong>{moment(valeur.datedebut).format('D MMMM Y')}</strong> au <strong>{moment(valeur.datefin).format('D MMMM Y')}. . . . . . . . . . . . . . . . . . . </strong> 
                                                    <span className="text-red-500 cursor-pointer" onClick={() => this.action.deleteDate(valeur)}>
                                                    Supprimer
                                                    </span>
                                                </h3>
                                                
                                                    
                                                
                                            </>)

                                        }
                                        

                                    })}
                               
                                    <table class="table table-condensed">
                                        <thead>
                                        {trieDate.map(cat=>{
                                            return(
                                                <th>
                                                    <span className="text-blue-600">{cat.jourdebut} au {cat.jourfin} Jour</span>
                                                </th>
                                                )
                                            })
                                        }        
                                        </thead>
                                        <tbody>
                                            <tr>
                                                {trieDate.map(cat=>{
                                                        return(
                                                        <td className="text-white">
                                                            <u>{cat.prixperso}</u> <br/>$/jours
                                                        </td>
                                                        
                                                        )
                                                })}
                                               
                                            </tr>
                                                
                                            
                                        </tbody>
                                    </table> 
                                </>
                            )

                        })}
                                                          
                    </div>
                    
                    {/* { utilisateurs && utilisateurs.length === 0 ? (<>Aucun utilisateur disponible pour le moment.</>) : null } */}
                    
                    
                </div>
                
            </>
        )
    }
}

export default AddTarif;
