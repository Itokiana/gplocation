import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../../axios'


class GestionSaison extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lire: false,
            saison: []
        }
    }
    componentDidMount() {
        this.getSaison();
    }

    getSaison = () => {
		axios.get('/saisons').then(response => {
			if (response.status === 200) {
				this.setState({
					saison: response.data

				})
				console.log(response.data)
			}
		})
    }
    render() {
        
        return (
            <>

                <div>
                    <br/>
                    <center>
                        <h1>Gestion des Saison</h1>
                        <br/>
                        {this.state.saison.map(saison => {
                                return (
                                    
                                    <Link to={`/ajouterSaison/${(saison.id)}`}
                                    className="border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 
                                    transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                                    >
                                    {saison.nomsaison}
                                    </Link>
                                
                                );
                            })}
                    
                    </center> 
                </div>
                <br/>

            </>
        )
    }
}

export default GestionSaison;
