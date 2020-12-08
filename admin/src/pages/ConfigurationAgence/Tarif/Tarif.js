import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../axios'
import AddTarif from './AddTarif'
import TariList from './TarifList';


class Tarif extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lire: false,
            categories: [],
            category: [],
            tarifs: []
        };
    }


    componentDidMount() {
        this.getCategories();
        this.getTarif()
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

    
   
    getTarif = (props) => {
        axios.get(`/tarifs`)
        .then(res => {
            const {tarifs} = res.data
            this.setState({ tarifs });
            console.log(this.state);
        })
    }

    deleteTarif = (tarif) => {
        axios.delete(`/tarifs/${tarif.id}`).then(response => {
            if (response.status === 204) {
                this.getTarif();
            }
        })
    }
    
    
    render() {
        console.log(this.state.tarifs);
        
        return (
            <>
                <div>
                    <center>
                        <h1>TARIF PERSONNALISER</h1>
                        
                    <br/>
                    {this.state.categories.map(category => {
                        return (
                            
                            <Link to={`/ajouter_un_tarif/${(category.id)}`}
                            className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 
                            transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                            >
                            {category.name}
                            </Link>
                        
                        );
                    })}
                    </center>
                    
                </div>
                <br/>
                <div>
                { this.state.tarifs && this.state.tarifs.map(tarif => {
                    return (
                    <div>
                        <p>Du: {tarif.date_debut} Au: {tarif.date_fin}</p>
                        <table className="min-w-full">
                            
                            <tr>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 
                                text-blue-500 tracking-wider">1 jour</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 
                                text-blue-500 tracking-wider">3 jours</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 
                                text-blue-500 tracking-wider">5 jours</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 
                                text-blue-500 tracking-wider">6 jours</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 
                                text-blue-500 tracking-wider">categorie</th>
                            </tr>
                            
                            
                                <tr className="bg-white">
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{tarif.prix1} £</td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{tarif.prix3} £</td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{tarif.prix5} £</td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{tarif.prix6} £</td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{
                                      <TariList category={tarif.category_id}/>
                                }</td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                <button
                                    type="button"
                                    className="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition 
                                    duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                                    onClick={() => this.deleteTarif(tarif)} 
                                >
                                    delete
                                </button>
                                </td>
                                </tr>
                        
                        </table>
                    </div>
                )})}
                <br/><br/>
                </div>
            
            </>
        )
    }
}

export default Tarif
