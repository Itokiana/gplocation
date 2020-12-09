import React, { Component } from 'react';
import { Field } from 'formik';


export default class DeuxJourFerier extends Component {

    nameDDate= `dateD${this.props.num}`
    nameDJour= `jourD${this.props.num}`
    nameDPrix= `prixD${this.props.num}`
    nameCheckD= `chexkD${this.props.num}`

    render () {
        return(
            <tr>
                <td className="input-column">
                
                <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 
                px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="date" name={[this.nameDDate]}/>
                </td>   
                <td className="input-column">
                
                <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 
                px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name={[this.nameDJour]}/>
                    
                </td>
                <td className="input-column">
                    
                <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 
                px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="number" name={[this.nameDPrix]}/>
                    
                </td>
                <td className="input-check" >
                    <div className="ml-4 mb-4">
                        <Field className="form-check-input" type="checkbox"  id={this.nameCheckD} name={this.nameCheckD} />
                    </div>
                </td>
            </tr>    

        )
    }
}
