import React from 'react'
import axios from '../../axios'
import { NavLink } from 'react-router-dom'


class Planning extends React.Component{
    state = {
        categorie: [],
        voiture: []
    }

    componentDidMount() {
        this.getCategories()
    }

    getCategories = () => {
		axios.get(`/categories`).then(response => {
			if (response.status === 200) {
				this.setState({
					categories: response.data
				});
				console.log(this.state.categories);
			}
		});
    };
    
    render(){
        return(
            <>
            <h1>Bbonjour</h1>
            </>
        )
    }

}
export default Planning;