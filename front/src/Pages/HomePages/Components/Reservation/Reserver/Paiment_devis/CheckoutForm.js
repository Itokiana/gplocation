import React from 'react';
import { ElementsConsumer, CardElement, CardNumberElement } from '@stripe/react-stripe-js';

import CardSection from './CardSection';
import axios from '../../../../../../axios';
import history from '../../../../../../History'
import "../Paiment/paiment.css"

class CheckoutForm extends React.Component {
  state = {
    erreur: false
  }

  handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const { stripe, elements } = this.props

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make  sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardNumberElement);
    const result = await stripe.createToken(card);

    if (result.error) {
      // Show error to your customer.
      this.setState({
        erreur: true
      })
      // console.log('ato ny',result.error.message);
    } else {
      // Send the token to your server.
      // This function does not exist yet; we will define it in the next step.
      // console.log(result.token)
      stripeTokenHandler(result.token);
    }
  };

  render() {

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className=''>
            <div className='row text-muted h6 '>
              <span className='col-md-6 text-left h-5'>Identifiant commerçant :</span>

              <span className='col-md-6 text-right h-5 ml-auto'> 075206491500024</span>
            </div>
            <div className='row text-muted h6 '>
              <span className='col-md-6 text-left h-5'>Référence de la transaction  :</span>

              <span className='col-md-6 text-right h-5 ml-auto'>210936</span>
            </div>
          </div>
          <br />
          <h1 className='separator accompt-payer vola'>{parseFloat(this.props.prix).toFixed(2)} €</h1>
          <br />
          <br />
          {/* {this.props.} */}
          <CardSection />
          <br />
          <button disabled={!this.props.stripe} className="btn m-btn bt-pay h1">
            Valider <span className="fa fa-angle-right fa--perso "></span>
          </button>
        </form>
        {this.state.erreur === true ? <h3 className='text-center text-danger'> Accse refuser </h3> : null}
      </>
    );
  }
}

export default function InjectedCheckoutForm(props) {

  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm prix={props.prix} stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}

async function stripeTokenHandler(token) {

  let data = JSON.parse(sessionStorage.getItem("data"))
  let prix = parseFloat(sessionStorage.getItem("prixacompte"))
  sessionStorage.setItem('nom', data.client.nom)
  sessionStorage.setItem('prenom', data.client.prenom)
  let totalprix = (prix === parseFloat(data.reservation.prix) ? 'Devis/paiment total' : 'Devis/paiment partiel')

  const paymentData = { stripeToken: token.id, description: data.client.id, accompte: prix };

  const response = await axios.post('/charges', paymentData)

  if (response.data === true) {
    console.log("paiement reussi")
    let values = {
      status: totalprix
    }
    await axios.put(`/reservations/${data.reservation.id}`, values).then(result => {
      if (result.status === 200) {
        history.push('/felicitation')
        window.location.reload()
      }
    })
  } else {
    console.log("paiement non reussi")
  }

}

