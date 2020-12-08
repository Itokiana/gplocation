import React, { Component } from 'react';
import UnTarifDeBase from './UnTarifDeBase';
import './TarifDeBase.css';
import { Formik , Form } from 'formik';
import axios from '../../../../axios';

export default class TarifDeBase extends Component {
    state = {
      nombreLigne: [],
      id:[],
      initValues:null,
      size:0
    }
    valideAndSave = () => {

       
    }
 
    ajoutNewPeriod =() =>{
        this.setState({
            nombreLigne: [...this.state.nombreLigne,this.state.nombreLigne.pop() + 1]
        })
        
    }
    componentDidMount(){
        
        axios.get(`/base_tarifs/${this.props.ids}`).then(response => {
            console.log(response)
            for(var i=0 ; i< response.data.tarif_par_categorie.length ;i++){
                var obj = { ...response.data.tarif_par_categorie[i] };
                this.setState({
                    nombreLigne: [...this.state.nombreLigne,i+1],
                    id:[...this.state.id,obj.id],
                    initValues:{
                       ...this.state.initValues,
                       [`jourD${i+1}`]: obj.jourdebut,
                       [`jourF${i+1}`]: obj.jourfin,
                       [`prixBS${i+1}`]: obj.prixbassesaison,
                       [`prixMS${i+1}`]: obj.prixmoyennesaison,
                       [`prixHS${i+1}`]: obj.prixhautesaison,
                       [`check${i+1}`]: "",
                    },
                    size: this.state.size + i
                })
            }
            console.log(this.state.initValues)
            console.log(this.state.size)

        })
    }

   
    render() {
        return (
            <>
            {
                this.state.size >=153?(

            <div>
                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <Formik
                        initialValues = {this.state.initValues}
                        onSubmit={(data,{setSubmitting})=>{
                            setSubmitting(true);
                                                  
                            axios.post('/base_tarifs',{data, tableau:this.state.nombreLigne,ids: this.props.ids,id:this.state.id})
                            
                            setSubmitting(false)
                        }}
                    >{({values, isSubmitting}) => (
                        <Form>
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col" className="input-column">Combinaison</th>
                                        <th scope="col" className="input-column">Prix BS(€/jour)</th>
                                        <th scope="col" className="input-column">Prix MS(€/jour)</th>
                                        <th scope="col" className="input-column">Prix HS(€/jour)</th>
                                        <th scope="col" className="input-check">Active</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                     this.state.nombreLigne.map((ligne) => 
                                        <UnTarifDeBase key={ligne} num={ligne}/>
                                     )
                                }
                                </tbody>
                            </table>

                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn btn-success" >Ajout periode</button>
                                <input type="submit" className="btn btn-primary" value="Valider"/>
                            </div>

                        </Form>
                    )}
                    </Formik>
                    </div>
                </section>

            </div>
        
                ):null
            }
            </>
        )
    }
}