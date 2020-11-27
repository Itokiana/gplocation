import React, { Component } from 'react';
import './TarifDeBase.css';
import {  Field } from 'formik'

export default class UnTarifDeBase extends Component {

    
    nameJD=`jourD${this.props.num}`
    nameJF=`jourF${this.props.num}`
    nameBS=`prixBS${this.props.num}`
    nameMS=`prixMS${this.props.num}`
    nameHS=`prixHS${this.props.num}`
    nameCheck =`check${this.props.num}`

    


    render(){
        

        return(
           
            
                <tr>
                    <td className="input-column">
                        <div className="row">
                            <div className="input-nbjours mr-3 ml-3">
                                <Field type="text" className="form-control" id={this.nameJD} name={this.nameJD} />
                            </div>

                            <p>à</p>
                            <div className="input-nbjours ml-3 mr-3">
                                <Field type="text" className="form-control"  id={this.nameJF} name={this.nameJF} />
                            </div>
                            <p>jours</p>
                        </div>
                    </td>
                    <td className="input-column">
                        <Field type="text" className="form-control input-prix" id={this.nameBS} name={this.nameBS} />
                        
                    </td>
                    <td className="input-column">
                        <Field type="text" className="form-control input-prix" id={this.nameMS} name={this.nameMS} />
                        
                    </td>
                    <td className="input-column">
                        <Field type="text" className="form-control input-prix" id={this.nameHS} name={this.nameHS}/>
                        
                    </td>
                    <td className="input-check">
                        <div className="ml-4 mb-4">
                            <Field className="form-check-input" type="checkbox"  id={this.nameCheck} name={this.nameCheck} />
                        </div>
                    </td>
                </tr>
           
       
        )
    }

}