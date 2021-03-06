import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from '../../axios'
import './Login.css';
import ErrorLogin from './ErrorLogin';
import {BiMessageSquareError,BiInfoCircle} from 'react-icons/bi';
import { IconContext } from "react-icons";
import { ToastContainer, toast } from 'react-toastify';
import {useParams } from 'react-router-dom';
import history from '../../History';


const validationSchema = Yup.object().shape({


password_digest: Yup.string()
  .required('le mot de passe ne doit pas être vide')
  .min(8, 'le mot de passe contenir au moins huit caractère'),
password: Yup.string()
  .required('le mot de passe doit être confirmer')
  .oneOf(
    [Yup.ref('password_digest'), null],
     'les mots de passe doivent correspondre',
   ),
    
});





export default function Password() {
    const { token } = useParams();
    const message =(e)=>{
		return <IconContext.Provider value={{ size: '50px', style: { horizontalAlign: 'middle' }}} className='row'> <BiMessageSquareError className="icon col-md-12"/><p className="col-md-12 col-md-offset-1"> {e}</p></IconContext.Provider>;
	}
    const messagee =(e)=>{
		return <IconContext.Provider value={{ size: '50px', style: { horizontalAlign: 'middle' }}} className='row'> <BiInfoCircle className="icon col-md-12"/><p className="col-md-12 col-md-offset-2"> {e}</p></IconContext.Provider>;
	}

    const {handleChange, handleSubmit, values, errors, touched} = useFormik({
        initialValues: {
          token: token,
          email: `${sessionStorage.getItem('email')}`,
          password_digest: '',
          password: ''
        },
        validationSchema,
        onSubmit: values => {
          
          axios.post('/password/reset', values).then(response =>{
              if (response.status === 200){
                
                toast.info(messagee(response.data.status));
                sessionStorage.removeItem('email')
                history.push('/login')
                window.location.reload()

              }
              values:{}
          }).catch(err => {
            if (err.response.status === 404) {
               
                toast.error(message(err.response.data.error));
              }
            else{
               
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
            value={localStorage.getItem('email')}
            className='email_field champ_email'
            disabled
          />
        	<ErrorLogin errors={errors} touched={touched} row="email"/>
          <input
            id="password"
            name="password_digest"
            type="password"
            onChange={handleChange}
            value={values.password_digest}
            className='email_field champ_email'
            placeholder='nouveaux mot de passe'
          />
        	<ErrorLogin errors={errors} touched={touched} row="password_digest"/>

            <input
            id="confirm_password"
            name="password"
            type="password"
            onChange={handleChange}
            value={values.password}
            className='email_field champ_email'
            placeholder='confirmer mot de passe'
          />
        	<ErrorLogin errors={errors} touched={touched} row="password"/>
            <button type="submit" className="btn m-btn">Valider<span className="fa fa-angle-right"></span></button><br/><br/>
        </form>
        <div className='col-md-3'></div>
        </div>
        </div>
        </div>
      );
}
