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
        idGlobal:[],
        objetData: [],
        initVal:null
    }
    ajoutNewUnJour =() =>{
        this.setState({
            nombreLigneUn: [...this.state.nombreLigneUn,this.state.nombreLigneUn.pop() + 1],
            //idUn: [...this.state.idUn, this.state.idGlobal.pop() +1]
        })
        
    }
    ajoutNewDeuxJour =() =>{
        this.setState({
            nombreLigneDeux: [...this.state.nombreLigneDeux,this.state.nombreLigneDeux.pop() + 1]
            // idGlobal: [...this.state.idGlobal, this.state.idGlobal.pop() +1],
            // idD: [...this.state.idD, this.state.idGlobal.pop() +1]

        })
        console.log(this.state.nombreLigneDeux)
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
            console.log("objet tout", this.state.objetData)
            console.log("id tout", this.state.idGlobal) 
            console.log("Tab 1", this.state.nombreLigneDeux)
            

        })
       
    
    }
    
    
    
    render() {
        //let obj=Object.assign( {}, this.state.initValue1,this.state.initValue2)
        //console.log(this.state.objetData.pop())
       
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
                                        type="button"
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
                                        type="button"
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



        );
    }
}

export default GestionJF;
