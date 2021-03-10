import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from '../../axios'
import './Login.css';
import ErrorLogin from './ErrorLogin';
import {BiMessageSquareError,BiInfoCircle} from 'react-icons/bi';
import { IconContext } from "react-icons";
import { ToastContainer, toast } from 'react-toastify';
import {  Redirect, Link } from 'react-router-dom';
import history from '../../History';
const validationSchema = Yup.object().shape({

email: Yup.string()
  .email('Email invalide,merci de vouloire completé')
  .required('l \' email ne doit pas être vide'),
});




export default function FindEmail() {

    const message =(e)=>{
		return <IconContext.Provider value={{ size: '50px', style: { horizontalAlign: 'middle' }}} className='row'> <BiMessageSquareError className="icon col-md-12"/><p className="col-md-12 col-md-offset-1"> {e}</p></IconContext.Provider>;
	}
    const messagee =(e)=>{
		return <IconContext.Provider value={{ size: '50px', style: { horizontalAlign: 'middle' }}} className='row'> <BiInfoCircle className="icon col-md-12"/><p className="col-md-12 col-md-offset-2"> {e}</p></IconContext.Provider>;
	}

    const {handleChange, handleSubmit, values, errors, touched} = useFormik({
        initialValues: {
          email: '',
      
        },
        validationSchema,
        onSubmit: values => {
          console.log(values)
          axios.post('/password/forgot', values).then(response =>{
              if (response.status === 200){
                console.log(response.data.status)
                toast.info(messagee(response.data.status));
                setTimeout(() => { history.back(); }, 5000);
                
              }
              values:{}
          }).catch(err => {
            if (err.response.status === 404) {
                console.log(err.response.data.error)
                toast.error(message(err.response.data.error));
              }
            else{
                console.log(err.response.data.error)
                toast.error(message(err.response.data.error));
            }
          });
        }
      });
      return (
        
        <div className='password-forgot b-contacts s-shadow'>
         <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            {/* Same as */}
        <ToastContainer />
        <div className='cont'>
        <div className='row container'>
        <div className='col-md-4'></div>
        <form onSubmit={handleSubmit} className='s-form wow zoomInUp col-md-5 formulaire'noValidate>
          <label htmlFor="email" className='s-titleDet wow zoomInUp label_mdp'>Reintialisez le mot de passe</label>
          <br/>

          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={values.email}
            className='email_field champ_email'
            placeholder='Entrez votre adresse email'
          />
        	
            <button type="submit" className="btn m-btn">Valider<span className="fa fa-angle-right"></span></button><br/><br/>
        </form>
        <div className='col-md-3'></div>
        </div>
        </div>
        </div>
      );
}
