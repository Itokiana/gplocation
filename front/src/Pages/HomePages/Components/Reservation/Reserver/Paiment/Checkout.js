import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import {loadStripe} from '@stripe/stripe-js';
import './paiment.css'


const stripePromise = loadStripe('pk_test_51HytmbEe9DUC1ZdoZKhQfbK82voTI18SF1rgfN8F6ncuaulMEkPgCk68RAOKoR9S6jiiFYpOxuymIueWIPitRICA00Ws2144PY');

function Checkout (props) {
    sessionStorage.setItem("data",JSON.stringify(props.data))
        return(
                <div className="example">
                    <div className="card">
                        <Elements stripe={stripePromise}>
                        {
                            props.data.length !== 0 ? (
                                <>
                                <CheckoutForm />
                                <button className="bt-annuler" onClick={props.Paiement}>Annuler</button>
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