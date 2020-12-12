import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../../axios'
import Indexs from './calendrier/Indexs.js'
import { NavLink } from 'react-router-dom';


class GestionSaison extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lire: false,
            saison: [],
            
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
                    {/* <NavLink to="/calendrier" >
                        <button class="text-white bg-indigo-500 border-0 hover:bg-indigo-600 font-bold py-2 px-4 rounded">calendrier</button>
                    </NavLink> */}
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
                <div>
                    <Indexs/>
                </div>
                

            </>
        )
    }
}

export default GestionSaison;
