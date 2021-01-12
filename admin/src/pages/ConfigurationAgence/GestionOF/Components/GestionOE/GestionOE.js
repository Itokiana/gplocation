import React, { Component, setStat} from 'react'
import axios from '../../../../../axios'
import { Formik, Form, Field } from 'formik';
import moment from 'moment' ;

import '../GestionOF/gestionOF.css'
// import ListeOE from './ListeOE'


class GestionOE extends Component {
    // constuctor(props) {
    //     super(props)
    //     this.routeChange = this.routeChange.bind(this);
    // }
    
    state = {
        date : []
    }
    
    componentDidMount() { 
        this.interval = setInterval(() =>
            this.action.getOuvert()
            , 1000)
    }
    refreshPage() {
        // window.location.reload(false);
        this.setState({date: []})
    }

    // routeChange() {
    //     let path = `/ouverture`;
    //     this.props.history.push(path);
    //   }
    action = {
        getOuvert: () => {
            
            axios.get(`/ouvertexceptions`).then(response => {
                if (response.status === 200) {
                    this.setState({
                        date: response.data
                    });
                    console.log(this.state.date);
                }
            })
                
        },
        
        deleteOuvert: (ouvert) => {
            axios.delete(`/ouvertexceptions/${ouvert.id}`).then(response => {
                if (response.status === 204) {
                    this.action.getOuvert();
                }
            })
        }
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        const  { date } = this.state;
        return (
            <>
                    <div className="page-title">
                        <div>
                            <h2>GESTION DES OUVERTURE EXECEPTIONNEL </h2>
                        </div>
                    </div>
                    <h3>Ajouter autant de periode ouverture nécessaire </h3>
                    <br/><br/>
                    <div className="row">
                    <Formik
                        initialValues={{
                            jourouvertdebut: '',
                            jourouvertfin:''
                            
                        }}
                        
                        onSubmit={(data, { resetForm }) => {        
                            axios.post('/ouvertexceptions', data).then(response => {
                                if (response.status === 204) {
                                    this.setstate({
                                        date : []
                                    })
                                    this.action.getOuvert();
                                }
                            })
                            resetForm({}); 
                        }}
                       
                    
                    >
                        <Form className="d-flex align-items-start">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block text-white tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Du :
                                </label>
                                <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 
                                px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="date" name="jourouvertdebut"/>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block text-white tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Au
                                </label>
                                <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 
                            px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date" name="jourouvertfin"/>
                            </div>

                            <div className="w-full md:w-1/2 px-3">
                                        
                                <button
                                    type="submit"
                                    className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 
                                    transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                >
                                    Ajouter
                                </button>
                            </div>   
                        </Form>
                    </Formik>
                    
                </div>
                {/* <ListeOE
                    action={{...this.action}}
                    date={date}/> */}

                {/* Liste des jour exceptionel */}
                
                
                <div className="py-4">
                    
                    <div className="mt-2">
                        <table class="table table-condensed">
                           <thead>
                              <tr>
                              <th>Periodes ouvert exceptionel </th>
                              <th>Action</th>
                              
                              </tr>
                           </thead>
                            <tbody>
                                { this.state.date && this.state.date.length === 0 ? <h1>Chargement</h1> : this.state.date.map(nomdate => {
                                    return (
                                        <tr>
                                          <td className="text-white"><strong>{moment(nomdate.jourouvertdebut).format('D MMMM Y')  }</strong>  jusqu'a  <strong>{ moment(nomdate.jourouvertfin).format('D MMMM Y') }</strong></td>
                                          <td ><span className="text-red-500 cursor-pointer" onClick={() => this.action.deleteOuvert(nomdate)}>Supprimer</span></td>
                                            
                                        </tr>
                                    )
                                }) }
                                
                            </tbody>
                        </table>
                    </div>
                    
                    {/* { utilisateurs && utilisateurs.length === 0 ? (<>Aucun utilisateur disponible pour le moment.</>) : null } */}
                    
                    
                </div>
            </>
        )
    }
}
export default GestionOE