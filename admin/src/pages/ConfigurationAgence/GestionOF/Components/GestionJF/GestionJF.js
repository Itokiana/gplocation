import React, { Component, setStat} from 'react'
import axios from '../../../../../axios'
import { Formik, Form, Field } from 'formik';
import UnJourFerier from './UnJourFerier';
import DeuxJourFerier from './DeuxJourFerier';

//import '../GestionOF/gestionOF.css'

class GestionJF extends Component {

    state = {

        nombreLigneUn : [],
        nombreLigneDeux : [],
        idU:[],
        idD:[],
        objetData: [],
        initVal:null
    }
    ajoutNewUnJour =() =>{
        this.setState({
            nombreLigneUn: [...this.state.nombreLigneUn,this.state.nombreLigneUn.pop() + 1]
        })
        
    }
    ajoutNewDeuxJour =() =>{
        this.setState({
            nombreLigneDeux: [...this.state.nombreLigneDeux,this.state.nombreLigneDeux.pop() + 1]
        })
        
    }
    componentDidMount(){
        axios.get('/jourferiers').then(response => {
            if (response.status === 200) {
                this.setState({
                    objetData: response.data
                })
            } 
            var j=0
            var k=0
            var inValue= {}
            var idtab=[]
            var idtabD=[]
            var dateFirst= this.state.objetData[0].anne
    
            this.state.objetData.map(val =>{
                if (val.anne == dateFirst){
                    j = j + 1
                    idtab.push(val.id)
                    inValue[`date${j}`]=val.dateferie
                    inValue[`jour${j}`]=val.evenement
                    inValue[`prix${j}`]=val.surplus
                    inValue[`checkU${j}`]=""
                    inValue[`idTarifU${j}`]=val.id
                    inValue['anneeU']= val.anne
                    
                }
                else{
                    k = k + 1
                    idtabD.push(val.id)
                    inValue[`dateD${k}`]=val.dateferie
                    inValue[`jourD${k}`]=val.evenement
                    inValue[`prixD${k}`]=val.surplus
                    inValue[`checkD${k}`]=""
                    inValue[`idTarifD${k}`]=val.id
                    inValue['anneeD']= val.anne
                    
                }      
               
            })
            for(let i=0; i< j; i++){
                this.setState({
                    nombreLigneUn: [...this.state.nombreLigneUn,i+1],
                    idU:[...this.state.idU,idtab[i]]
                })
    
            }
            for(let l=0; l< k; l++){
                this.setState({
                    nombreLigneDeux: [...this.state.nombreLigneDeux,l+1],
                    idD:[...this.state.idD,idtabD[l]]
                })
    
            }
            this.setState({
                initVal: inValue  
            }) 
            console.log(this.state.initVal)    
        })
       
    
    }

    value=() =>{
        var inValue = this.state.initVal
       
        return inValue  
     }
    
    
    
    render() {
        //let obj=Object.assign( {}, this.state.initValue1,this.state.initValue2)
        console.log(this.value())
       
        return (
            <>
                <div className="page-title">
                    <div className="title_left">
                        <h2> GESTION DES JOUR FERIES </h2>
                    </div>
                </div>

                {this.state.initVal  ? 
                 <div className="row">
                    <Formik
                        initialValues={this.state.initVal}    
                        onSubmit={(value,{setSubmitting})=>{
                            setSubmitting(true);
                            axios.post('/jourferiers', {
                                value, tableauUn:this.state.nombreLigneUn,
                                tableauDeux:this.state.nombreLigneDeux,
                                idUn: this.state.idU,
                                idDeux: this.state.idD
                            })
                            console.log(value) 
                            setSubmitting(false);  
                        }}
                    
                    >
                        <Form class="w-full"> 
                
                            <div className="tableResponsive w-full">
                                <div className="w-25">
                                    <Field className="appearance-none block w-50 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 
                                        px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="number" name="anneeU"/>

                                </div>
                            
                                <table class="text-white w-200">
                                    <thead>
                                        <th>
                                            <td> Dates </td>
                                                                                            
                                        </th>
                                        <th>
                                            <td> Jour ferier </td>
                                                                                            
                                        </th>
                                        <th>
                                            <td> Surplus </td>
                                                                                            
                                        </th>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.nombreLigneUn.map((un) => 
                                                <UnJourFerier key={un} num={un} />
                                            )
                                            
                                        }
                                        
                                    </tbody>
                                </table>
                                <div className="d-flex justify-content-start">
                                    <button
                                        type="submit"
                                        className="border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 
                                        transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline" 
                                        onClick={this.ajoutNewUnJour}
                                    >
                                        Ajouter un ligne
                                    </button>
                                    
                                    <button
                                        type="submit"
                                        className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 
                                        transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                    >
                                        Valider
                                    </button>
                                </div>
                        
                            </div>

                            <hr style={{border: "2px", color:"white"}}/> <br/> <br/>
                                
                            <div className="tableResponsive w-full">
                                <div className="w-25">
                                    <Field className="appearance-none block w-50 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 
                                        px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="number" name="anneeD"/>

                                </div>
                            
                                <table class="text-white w-200">
                                    <thead>
                                        <th>
                                            <td> Dates </td>
                                                                                            
                                        </th>
                                        <th>
                                            <td> Jour ferier </td>
                                                                                            
                                        </th>
                                        <th>
                                            <td> Surplus </td>
                                                                                            
                                        </th>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.nombreLigneDeux.map((deux) => 
                                                <DeuxJourFerier key={deux} nbr={deux} />
                                            )
                                            
                                        }
                                        
                                    </tbody>
                                </table>
                                <div className="d-flex justify-content-start">
                                    <button
                                        type="submit"
                                        className="border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 
                                        transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline" 
                                        onClick={this.ajoutNewDeuxJour}
                                    >
                                        Ajouter un ligne
                                    </button>
                                    
                                    <button
                                        type="submit"
                                        className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 
                                        transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                    >
                                        Valider
                                    </button>
                                </div>
                        
                            </div>
                        </Form>             
                    </Formik>
                    
                </div>:<h1>Chargement......</h1>}

            </>



            // <div>
            //     <div className="right_col" role="main">
            //         <div className="">
            //             <div className="page-title">
            //             <div className="title_left">
            //                 <h3>Gestion des <small>Jours Feries</small></h3>
            //             </div>

            //             </div>

                       

            //             <div className="row">
                        

                       

            //             <div className="col-md-12 col-sm-12  ">
            //                 <div className="panel-FE">

            //                         <div className="x_content">
            //                             <div className="tableResponsive">
            //                                 <div className="col-md-6 col-sm-6">
            //                                     <div className="tableResponsive">
            //                                         <table >
            //                                             <thead>
            //                                                 <th>
            //                                                     <td>
            //                                                         2020
            //                                                     </td>                                            
            //                                                 </th>
            //                                             </thead>
            //                                             <tbody>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>01/01</span> - Jour de l'An
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>12/04</span> - Pâques
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>13/04</span> - Lundi de Pâques
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>01/05</span> - Fête du travail
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>08/05</span> - Jour de la victoire
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>21/05</span> - Ascension
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>01/06</span> - Lundi de Pentecôte
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>14/07</span> - Fếtes Nationale
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>21/07</span> - Victore Schoelcher
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>15/08</span> - Assomption
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>01/11</span> - Toussaint
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>11/11</span> - Armistice
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>20/12</span> - Commémoration Esclavage
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>25/12</span> - Nöel
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                             </tbody>
            //                                         </table>
            //                                         <span className="textLe">
            //                                             <button className="btn-vailde">Valider</button>
            //                                         </span>
            //                                     </div>
            //                                 </div>
            //                                 <div className="col-md-6 col-sm-6">
            //                                     <div className="tableResponsive">
            //                                         <table >
            //                                             <thead>
            //                                                 <th>
            //                                                     <td>
            //                                                         2021
            //                                                     </td>                                            
            //                                                 </th>
            //                                             </thead>
            //                                             <tbody>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>01/01</span> - Jour de l'An
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>12/04</span> - Pâques
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>13/04</span> - Lundi de Pâques
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>01/05</span> - Fête du travail
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>08/05</span> - Jour de la victoire
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>21/05</span> - Ascension
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>01/06</span> - Lundi de Pentecôte
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>14/07</span> - Fếtes Nationale
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>21/07</span> - Victore Schoelcher
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>15/08</span> - Assomption
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>01/11</span> - Toussaint
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>11/11</span> - Armistice
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>20/12</span> - Commémoration Esclavage
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                                 <tr>
            //                                                     <td>
            //                                                         <span>25/12</span> - Nöel
            //                                                     </td>
            //                                                     <td>
            //                                                         <span className="textLe">Surplus =</span>
            //                                                         <input type="text" className="formControl" name="table_records" /> 
                                                                    
            //                                                     </td>
            //                                                 </tr>
            //                                             </tbody>
            //                                         </table>
            //                                     </div>
            //                                 </div>
            //                             </div>    
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default GestionJF;
