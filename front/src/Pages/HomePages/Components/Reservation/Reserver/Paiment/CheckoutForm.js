

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
        <button disabled={!this.props.stripe} className="payer">Confirm order</button>
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
    const paymentData = {stripeToken: token.id};
  
    const response = await axios.post('/charges',paymentData)
    if (response.data===true){
      console.log("paiement reussi")
      let data=JSON.parse(sessionStorage.getItem("data"))
      console.log(data)
      let values = {
        date_depart: data.data.date_depart,
        date_retour: data.data.date_retour,
        heure_depart:data.data.heure_depart,
        heure_retour:data.data.heure_retour,
        prix:data.data.prix,
        voiture_id:data.data.id,
        client_id:data.client.client.id
      }
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

