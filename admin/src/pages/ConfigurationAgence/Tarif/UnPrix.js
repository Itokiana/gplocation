import React, { Component } from 'react';
import { Field } from 'formik';
import axios from '../../../axios';

export default class UnPrix extends Component {
    state = {
        jours: [],
    };


    namePrix=`prix${this.props.num}`
    nombreJourD=`nombreJourD${this.props.num}`
    nombreJourF=`nombreJourF${this.props.num}`

    
    render(){
        const jours = this.state.jours
        return(
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                
                {/* <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
                    py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name={this.namePrix} type="number"/>
                <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
                    py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name={this.namePrix} type="number"/>    
                 */}
                 <br/><br/>
                 <h3>Tarif de Jour</h3>
                <div style={{margin: "5%"}}>
                    <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
                    py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name={this.nombreJourD} type="number"/>
                    
                </div>
                <h3>au</h3>
                <div style={{margin: "5%"}}>
                    <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
                    py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name={this.nombreJourF} type="number"/>
                    
                </div>
                <h2>Prix</h2>
                <div style={{margin: "5%"}}>
                    <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
                    py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name={this.namePrix} type="number"/>
                   <h3> Euro/Jour</h3>
                </div>
                
            </div>
        )
    }

}
