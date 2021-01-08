
import React, { Component } from 'react'
import { Formik , Form, Field } from 'formik';
import axios from '../../../axios';



export default class Partiel extends Component {
    state = {
        inValue: null,
        paiment: null

    }
    componentDidMount(){
        
        axios.get(`/paimentpartiels`).then(response => {
            var objValue = response.data[0]
            var value ={}
            console.log(objValue)
    
            value[`description`]= objValue.description
            value[`typ`]= objValue.typ
            value[`montant`]= objValue.montant
            value[`minimal`]= objValue.minimal
        

            this.setState({
                inValue: value
            })
            console.log(this.state.inValue)       
        })  
    }
    
    render() { 
        return (
            <>
                <div className="page-title">
                    <div className="title_left">
                        <h2>Configuration</h2>
                    </div>
                </div>
                {this.state.inValue ?(
                <Formik   
                    initialValues={this.state.inValue}
                    onSubmit={(value,{setSubmitting})=>{
                        setSubmitting(true)                    
                        axios.post(`/paimentpartiels` ,value)
                        console.log(value)
                        setSubmitting(false) 
                    }}
                >
                    
                    <Form class="">
                        <div className="d-flex align-items-start">
                            <label className="block text-white tracking-wide text-gray-700 text-xs font-bold w-25" >
                                Description paiment partiel
                            </label>
                            {/* <textarea className="form-control rounded mb-3 px-5 w-50" name="description"></textarea> */}
                            <Field className="appearance-none block w-50 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 
                            px-3 mb-3 leading-tight focus:outline-none focus:bg-white" component="textarea" name= "description" />
                        </div>
                        <div className="d-flex align-items-start">
                            <label className="block text-white tracking-wide text-gray-700 text-xs font-bold w-25" htmlFor="grid-last-name">
                                Type de l'acompte
                            </label>
                            <Field className="appearance-none block w-50 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 
                            px-3 mb-3 leading-tight focus:outline-none focus:bg-white" type="number" name= "typ" />
                        </div>
                        <div className="d-flex align-items-start">
                            <label className="block text-white tracking-wide text-gray-700 text-xs font-bold w-25" htmlFor="grid-last-name">
                                Montant
                            </label>
                            <Field className="appearance-none block w-50 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 
                            px-3 mb-3 leading-tight focus:outline-none focus:bg-white" type="number" name= "montant" />
                        </div>
                        <div className="d-flex align-items-start">
                            <label className="block text-white tracking-wide text-gray-700 text-xs font-bold w-25" htmlFor="grid-last-name">
                                Montant minimal pour le declenchement du paiment partiel
                            </label>
                            <Field className="appearance-none block w-50 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 
                            px-3 mb-3 leading-tight focus:outline-none focus:bg-white" type="number" name= "minimal" />
                        </div>

                        <div className="w-full md:w-1/2 px-3">   
                            <button
                                type="submit"
                                className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 
                                transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                            >
                                Valide le modification
                            </button>
                        </div>
                            
                    </Form>
                </Formik>):<h1>Loading</h1>}
            </>
        )
    }
}
{/* <Form>
<div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
    </div>
</div>
<div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
    <input type="password" class="form-control" id="inputPassword">
    </div>
</div>
</Form> */}
