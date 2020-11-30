import React, { Component } from 'react';
import { Field } from 'formik';
import axios from '../../../axios';

export default class UnPrix extends Component {
    state = {
        jours: [],
    };

    componentDidMount() {
        this.getJours();
    }
    getJours = () => {
		axios.get(`/jours`).then(response => {
			if (response.status === 200) {
				this.setState({
					jours: response.data
				});
				console.log();
			}
		});
    };

    namePrix=`prix${this.props.num}`
    nameNombreJour=`nombreJour${this.props.num}`
    

    
    render(){
        const jours = this.state.jours
        return(
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <Field as="select" 
                    name={this.nameNombreJour} 
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        {jours && jours.map(nbjour => {
                            return <option value={nbjour.id}>
                                {nbjour.name}</option>
                            }
                        )}
                </Field>
                <div style={{margin: "5%"}}>
                    <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
                    py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name={this.namePrix} type="number"/>
                    
                </div>
            </div>
        )
    }

}
