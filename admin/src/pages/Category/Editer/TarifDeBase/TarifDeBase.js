import React, { Component } from 'react';
import UnTarifDeBase from './UnTarifDeBase';
import './TarifDeBase.css';
import { Formik , Form } from 'formik';
import axios from '../../../../axios';

export default class TarifDeBase extends Component {
    state = {
      nombreLigne: [1,2,3,4,5],
      valeurs:[],
      tableauData:[]
      
    }
    valideAndSave = () => {

       
    }
 
    ajoutNewPeriod =() =>{
        this.setState({
            nombreLigne: [...this.state.nombreLigne,this.state.nombreLigne.pop() + 1]
        })
        
    }
   
 

    render() {
        return (
            <div>
                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <Formik
                        initialValues = {{}}
                        onSubmit={(data,{setSubmitting})=>{
                            setSubmitting(true);
                                                  
                            axios.post('/tarif_de_bases',{data, tableau:this.state.nombreLigne})
                            console.log(data)
                            setSubmitting(false)
                        }}
                    >{({values, isSubmitting}) => ( 
                        <Form>
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col" className="input-column">Combinaison</th>
                                        <th scope="col" className="input-column">Prix BS</th>
                                        <th scope="col" className="input-column">Prix MS</th>
                                        <th scope="col" className="input-column">Prix HS</th>
                                        <th scope="col" className="input-check">Active</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                     this.state.nombreLigne.map((ligne) => 
                                        <UnTarifDeBase key={ligne} num={ligne} /> 
                                     )
                                }
                                </tbody>
                            </table>

                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn btn-success" onClick={this.ajoutNewPeriod}>Ajout periode</button>
                                <button type="submit" className="btn btn-primary">Valider</button>  
                            </div>

                        </Form>
                    )}
                    </Formik>
                    </div>
                </section>

            </div>
        )
    }
}