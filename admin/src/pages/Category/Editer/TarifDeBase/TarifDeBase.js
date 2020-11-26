import React, { Component } from 'react';
import UnTarifDeBase from './UnTarifDeBase';
import './TarifDeBase.css';
import { Formik, Form, Field, ErrorMessage } from 'formik'

export default class TarifDeBase extends Component {
    state = {
      nombreLigne: [1,2,3,4,5],
      valeurs:[],
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
                initialValues={{ }}

                // validate={values => {

                // const errors = {};
                // //jourD    
                // if (!values.jourD) {

                //     errors.jourD = 'Required';

                // } else if (!(values.jourD <=2 ) && isNaN(values.jourD)) {

                //     errors.jourD = 'Only numbers';

                // }
                // //jourF
                // if (!values.jourF) {

                //     errors.jourF = 'Required';

                // } else if (!(values.jourF <=2 ) && isNaN(values.jourF)) {

                //     errors.jourF = 'Only numbers';

                // }
                // //prix Basse Saison
                // if (!values.prixBS) {

                //     errors.prixBS = 'Required';

                // } else if (isNaN(values.prixBS)) {

                //     errors.prixBS = 'Only numbers';

                // }
                // //prix Moyenne Saison
                // if (!values.prixMS) {

                //     errors.prixMS = 'Required';

                // } else if (isNaN(values.prixMS)) {

                //     errors.prixMS = 'Only numbers';

                // }
                // //prix Haute Saison
                // if (!values.prixHS) {

                //     errors.prixHS = 'Required';

                // } else if (isNaN(values.prixBS)) {

                //     errors.prixHS = 'Only numbers';

                // }

                // return errors;

                // }}

                onSubmit={(values, { setSubmitting }) => {

                    console.log(values);

                }}
        >{({ isSubmitting ,handleSubmit }) => ( 
           <form onSubmit={handleSubmit}>
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
                                     this.state.nombreLigne.map((ligne) => {
                                        return   <UnTarifDeBase num={ligne} val={this.state.valeurs}/> 
                                    })
                                }
                                </tbody>
                            </table>

                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn btn-success" onClick={this.ajoutNewPeriod}>Ajout periode</button>
                                <button type="submit" className="btn btn-primary" onClick={this.valideAndSave}>Valider</button>  
                            </div>

                            </form>
        )}
        </Formik>
                    </div>
                </section>

            </div>
        )
    }
}