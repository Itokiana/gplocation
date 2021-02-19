import React, { Component } from 'react';
import './Profil.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import ErrorLogin from '../ErrorLogin';
import axios from 'axios'

const ClientSession = Yup.object().shape({
	old_password: Yup.string()
        .required('le mot de passe ne doit pas laisser à vide'),
	password_digest: Yup.string()
		.required('le mot de passe ne doit pas laisser à vide')
});
function comparaison (a,b){
    if (a===b){
        return true
    }else{
        return false
    }
}

class Profil extends Component {

   

    render() {
        return (
            <div>

                <section className="b-contacts s-shadow">
                    <div className="container">
                        
                        <div className="row">
                        
                            <div className="col-xs-6">
                                <div className="b-contacts__form">
                                    <div className="login">
                                    <div className="transaction text-justify">
                                        <div className="contentTitle">
                                        <h2>Mes coordonnées </h2>
                                        </div>
                                            <Formik
                                                initialValues={{
                                                    nom: sessionStorage.getItem('nom'),
                                                    prenom: sessionStorage.getItem('prenom'),
                                                    email: sessionStorage.getItem('email'),
                                                    telephone: sessionStorage.getItem('telephone'),
                                                    
                                                }}
                                            >
                                            {({ errors, touched, handleSubmit }) => (
                                                <Form className="contactForm" className="s-form wow zoomInUp" onSubmit={handleSubmit}  >
                                                    <div>
                                                        <Field disabled type="text" name="nom" />
                                                    </div>
                                                    <div>
                                                        <Field disabled type="text" placeholder="PRENOM*" name="prenom" />
                                                    </div>
                                                    <div>
                                                        <Field disabled type="text"  name="telephone" />
                                                    </div>
                                                    <div>
                                                        <Field disabled type="text"  name="email"/>
                                                    </div>
                                                        
                                                </Form>)}
										</Formik>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                           
                            <div className="col-xs-6">
                                <div className="b-contacts__address">
                                    <div className="transaction text-justify">
                                        <div className="login">
                                        <div className="contentTitle">
                                        <h2>Modifier mon mot de passe</h2>
                                        </div>
                                            <Formik
                                                initialValues={{
                                                    old_password: '',
                                                    password_digest: ''
                                                }}
                                                validationSchema={ClientSession}
                                                onSubmit={(values, { resetForm }) => {
                                                    axios.post('/client_login', values).then(response => {
                                                        if (response.status === 200) {
                                                            
                                                        }

                                                    })
                                                
                                                }}
                                            >
                                            {({ errors, touched, handleSubmit }) => (
                                                <Form id="contactForm"noValidate className="s-form wow zoomInUp" onSubmit={handleSubmit} >
                                                    <div>
                                                        <Field type="password" placeholder="ANCIEN MOT DE PASSE"  name="old_password"/>
                                                        <ErrorLogin errors={errors} touched={touched} row="old_password"/>
                                                    </div>
                                                    <div>
                                                        <Field type="password" placeholder="MOT DE PASSE"  name="password_digest" />
                                                        <ErrorLogin errors={errors} touched={touched} row="password_digest"/>
                                                    </div>
                                                    <div className="boutton-login">
                                                    <button type="submit" className="btn m-btn">Valider<span className="fa fa-angle-right"></span></button><br/><br/>
                                                    <span ><a href="#" className="oublier">Mot de passe oublié ?</a></span>
                                                    </div>
                                                </Form>)}
                                            </Formik>
                                        </div>
                    
                                    </div>
                                    
                                    <div className="content">
                                    <div className="transaction text-justify">
                                        <div className="contentTitle">
                                        <h2>Liste de mes réservations</h2>
                                        </div>
                                       <p>Aucune réservations</p>
                                        </div>
                                    </div>
                                </div>
                                </div>                    
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Profil
