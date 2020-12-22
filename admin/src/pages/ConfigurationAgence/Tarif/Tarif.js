import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../axios'
import moment from 'moment'


class Tarif extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            category: [],
            tarifperso: []
        };
    }


    componentDidMount() {
        this.getCategories();
        this.getTarifPerso();
    }
    getTarifPerso = () => {
        axios.get(`/tarifpersonels`).then(response => {
            if (response.status === 200) {
                this.setState({
                    tarifperso: response.data
                });
                console.log(this.state.tarifperso);
            }
        });
    }
    deleteDate = (date) => {
        axios.delete(`/tarifpersonels/${date.id}`).then(response => {
            if (response.status === 204) {
                this.getTarifPerso();
            }
        })
    }  

	getCategories = () => {
		axios.get('/categories').then(response => {
			if (response.status === 200) {
				this.setState({
					categories: response.data

				})
				console.log(response.data)
			}
		})
    }
    Liste = () => {
        return(
            <>
            {
            this.state.categories.map((category, key) => {
                const trieCategorie$key = this.state.tarifperso.filter(cat => cat.category_id == category.id);
                console.log("categorie",trieCategorie$key)
                const trieDate$key = []
                trieCategorie$key.map((date,keyDate) => {
                    // const tab$keyDate = {}
                    // tab$keyDate["debut"]=date.datedebut
                    // tab$keyDate["fin"]=date.datefin
                    trieDate$key.push(date.datedebut)
                    trieDate$key.push(date.datefin)

                })
                console.log("tab", trieDate$key)
                const unique = trieDate$key.filter((v, i, a) => a.indexOf(v) === i);

                console.log("unique", unique)
                return(
                    <>
                        <Link to={`/ajouter_un_tarif/${(category.id)}`}
                        className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 
                        transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                        >
                        Ajouter un {category.name}
                        </Link> 
                        {

                            unique.map((val1, keyval) => {
                                const val$keyval = []    
                                trieCategorie$key.map(val3 => {
                                    unique.map(val2=> {
                                        if(val3.datedebut===val1 && val3.datefin===val2){
                                            val$keyval.push(val3)
                                        }
                                    })
                                })
                                console.log(`val${keyval}`, val$keyval)

                                if (val$keyval.length === 0){
                                    return(<>
                                        <br/>
                                        </>
                                    )
                                }
                                else{ 
                                    return(
                                        <>
                                                
                                            <div className="py-4">
                                                <div className="mt-2">
                                                    <h3>
                                                    Du <strong>{moment(val$keyval[0].datedebut).format('D MMMM Y')}</strong> au <strong>{moment(val$keyval[0].datefin).format('D MMMM Y')}. . . . . . . . . . . . . . . . . . . </strong> 
                                                    <span className="text-red-500 cursor-pointer" onClick={() => this.deleteDate(val$keyval[0])}>
                                                    Supprimer
                                                    </span>
                                                    </h3>
                                                    <table class="table table-condensed">
                                                        <thead>
                                                        {val$keyval.map(val => {
                                                            return(
                                                                <>
                                                                    <th>
                                                                    <span className="text-blue-600">{val.jourdebut} au {val.jourfin} Jour</span>
                                                                    </th>
                                                                </>    
                                                                )
                                                        })}                    
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                            {val$keyval.map(cat=>{
                                                                return(
                                                                    <>
                                                                    <td className="text-white">
                                                                        <u>{cat.prixperso}</u> <br/>$/jours
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
                                }
                            })
                        
                        }
                    </>
                )

            })}
        </>
        )
    }   
    render() {
        return (
            <>
            <div>
                <center>
                    <h1 className="text-white">TARIF PERSONNALISER</h1>
                </center>
                    
                <br/>
                {this.Liste()}
            </div>
            </>
        )
    }
}

export default Tarif
