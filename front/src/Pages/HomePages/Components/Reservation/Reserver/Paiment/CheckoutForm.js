

import React from 'react';
import {ElementsConsumer, CardElement} from '@stripe/react-stripe-js';

import CardSection from './CardSection';
import axios from '../../../../../../axios';
import history from '../../../../../../History'

class CheckoutForm extends React.Component {


  componentDidMount(){
    console.log(this.props)
  }

  handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const {stripe, elements} = this.props

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make  sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      // Show error to your customer.
      console.log(result.error.message);
    } else {
      // Send the token to your server.
      // This function does not exist yet; we will define it in the next step.
      stripeTokenHandler(result.token);
    }
  };

  render() {
    console.log("ato iooooooooo")
    console.log(this.props.client)
    return (
      <form onSubmit={this.handleSubmit}>
        <CardSection />
        <button disabled={!this.props.stripe} className="payer">Payer 100€</button>
      </form>
    );
  }
}

export default function InjectedCheckoutForm(props) {
  console.log(props.client)
  return (
    <ElementsConsumer>
      {({stripe, elements}) => (
        <CheckoutForm  stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}
async function stripeTokenHandler(token) {
  let data=JSON.parse(sessionStorage.getItem("data"))
    const paymentData = {stripeToken: token.id,description: data.client.client.id};

    const response = await axios.post('/charges',paymentData)
    if (response.data===true){
      console.log("paiement reussi")
      
      let numero_vol = ''
      if (sessionStorage.getItem("numero_vol")){
        numero_vol=JSON.parse(sessionStorage.getItem("numero_vol"))
      }
      let values = {
        date_depart: data.data.date_depart,
        date_retour: data.data.date_retour,
        heure_depart:data.data.heure_depart,
        heure_retour:data.data.heure_retour,
        prix:data.data.prix,
        voiture_id:data.data.id,
        client_id:data.client.client.id,
        numero_vol:numero_vol.numero_vol
      }
      sessionStorage.setItem("data",'')
      sessionStorage.setItem("numero_vol",'')
      await axios.post('/reservations',values).then(result => {
        if(result.status===201){
          history.push('/')
          window.location.reload()
        }
      })
    }else{
      console.log("paaiement non reussi")
    }
    // Return and display the result of the charge.
}

