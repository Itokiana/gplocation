import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import './paiment.css'

const Public_key = 'pk_test_51IU6LfBAIuRK3Pz6LNTzYccwAacnuwexctezJt0fQhZSeSwBkzdn99U5i5T9ftJbqrYKohZpq5bmMvBhmZAcQZuB00MfQjbUnU'
const stripePromise = loadStripe(Public_key);

function Checkout(props) {
    sessionStorage.setItem("data", JSON.stringify(props.data))
    console.log('Ato @ Check', props)
    return (
        <div className="example">
            <div className="card">
                <Elements stripe={stripePromise}>
                    {
                        props.data !== true ? (
                            <>
                                <CheckoutForm count={props.data} />
                                <br/>
                                <a className=" text-muted h6 annuler--perso " ><ins>Annulation-retour a la boutique</ins></a>
                            </>
                        ) : (
                            <></>
                        )
                    }

                </Elements>
            </div>
        </div>
    )
}
export default Checkout