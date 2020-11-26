import React, { Component } from 'react';
import './TarifDeBase.css';
import { Field, ErrorMessage } from 'formik'

export default class UnTarifDeBase extends Component {

    state = {
        jourD: null,
        jourF:null,
        prixBS:null,
        prixMS:null,
        prixHS:null,
        instance:{},
        touteInstance:[]
    }
    recupjourD = (e) => {
        this.setState({
            jourD: e.target.value,
        })  
    }
    recupjourF = (e) => {
        this.setState({
            jourF: e.target.value,
            
        })  
    }
    recupPrixBS = (e) => {
        this.setState({
            prixBS: e.target.value,
        })  
    }
    recupPrixMS = (e) => {
        this.setState({
            prixMS: e.target.value,
        })  
    }
    recupPrixHS = (e) => {
        this.setState({
            prixHS: e.target.value,
        })  
    }
    submitOne = () => {
        this.setState({
            instance:{...this.state.instance,'jourD':this.state.jourD}
        })
        console.log(this.state)
    }


    render(){
        return(
           
            
                <tr>
                    <td className="input-column">
                        <div className="row">
                            <div className="input-nbjours mr-3 ml-3">
                                <Field type="text" className="form-control" name={`jourD${this.props.num}`} value={this.state.jourD}  onChange={this.recupjourD}/>
                            </div>

                            <p>à</p>
                            <div className="input-nbjours ml-3 mr-3">
                                <Field type="text" className="form-control" name={`jourF${this.props.num}`} value={this.state.jourF}  onChange={this.recupjourF}/>
                            </div>
                            <p>jours</p>
                        </div>
                    </td>
                    <td className="input-column">
                        <Field type="text" className="form-control input-prix"   name={`prixBS${this.props.num}`} value={this.state.prixBS} onChange={this.recupPrixBS}/>
                        <ErrorMessage name="prixBS" component="div" />
                    </td>
                    <td className="input-column">
                        <Field type="text" className="form-control input-prix"   name={`prixMS${this.props.num}`}  value={this.state.prixMS} onChange={this.recupPrixMS}/>
                        <ErrorMessage name="prixMS" component="div" />
                    </td>
                    <td className="input-column">
                        <Field type="text" className="form-control input-prix"   name={`prixHS${this.props.num}`}  value={this.state.prixHS} onChange={this.recupPrixHS}/>
                        <ErrorMessage name="prixHS" component="div" />
                    </td>
                    <td className="input-check">
                        <div className="ml-4 mb-4">
                            <Field className="form-check-input" type="checkbox" name={`checkbox${this.props.num}`}  onSubmit={this.submitOne}/>
                        </div>
                    </td>
                </tr>
           
       
        )
    }

}