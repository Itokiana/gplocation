import React from 'react';
import {ElementsConsumer, CardElement, CardNumberElement} from '@stripe/react-stripe-js';

import CardSection from './CardSection';
import axios   from '../../../../../../axios';
import history from '../../../../../../History'

class CheckoutForm extends React.Component {

  componentDidMount(){
    console.log("VAOAVAO",this.props)
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

    const card = elements.getElement(CardNumberElement);
    const result = await stripe.createToken(card);

    if (result.error) {
      // Show error to your customer.
      history.push('/error_res')
      window.location.reload()
      console.log('ato ny',result.error.message);
    } else {
      // Send the token to your server.
      // This function does not exist yet; we will define it in the next step.
      console.log(result.token)
      stripeTokenHandler(result.token);
    }
  };

  render() {
    
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='m-5'>
          <p className='text-left'>
            &nbsp; &nbsp;Identifiant commerçant &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;075206491500024
          </p>
          <p className='text-left'>
            &nbsp; &nbsp;Référence de la transaction &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;210936
          </p>
        </div>
        <br/>
        <h2>Payer</h2>
        <h1 className='accompt-payer'>{this.props.do},00 €</h1>
        <br/>
        <br/>
        {/* {this.props.} */}
        <CardSection />
        <br/>
        <button disabled={!this.props.stripe} className="payer">
          Valider
        </button>
      </form>
    );
  }
}

export default function InjectedCheckoutForm(props) {
  console.log(props)
  return (
    <ElementsConsumer>
      {({stripe, elements}) => (
        <CheckoutForm  do= {props.count.data.count} stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}

async function stripeTokenHandler(token) {
  let data=JSON.parse(sessionStorage.getItem("data"))
  // let acompte = sessionStorage.getItem("acompte")
  const paymentData = {stripeToken: token.id,description: data.client.client.id, accompte: data.data.count };

  const response = await axios.post('/charges',paymentData)
  if (response.data===true){
    console.log("paiement reussi")
    
    let numero_vol = ''
    if (sessionStorage.getItem("numero_vol")){
      numero_vol=JSON.parse(sessionStorage.getItem("numero_vol"))
    }
    let values = {
      date_depart: sessionStorage.getItem("date_depart"),
      date_retour: sessionStorage.getItem("date_retour"),
      heure_depart:JSON.parse(sessionStorage.getItem("heure_depart")),
      heure_retour:JSON.parse(sessionStorage.getItem("heure_retour")),
      prix:data.data.prix,
      voiture_id:data.data.id,
      client_id:data.client.client.id,
      numero_vol:numero_vol.numero_vol,
      acompte:data.data.count,
      lieu_depart: sessionStorage.getItem("lieu_depart"),
      lieu_retour: sessionStorage.getItem("lieu_retour")
    }
    sessionStorage.setItem("data",'')
    sessionStorage.setItem("numero_vol",'')
    sessionStorage.setItem("date_depart",'')
    sessionStorage.setItem("date_retour",'')
    sessionStorage.setItem("heure_depart",'')
    sessionStorage.setItem("heure_retour",'')
    sessionStorage.setItem("lieu_depart",'')
    sessionStorage.setItem("lieu_retour",'')
    await axios.post('/reservations',values).then(result => {
      if(result.status===201){
        history.push('/felicitation')
        window.location.reload()
      }
    })
  }else{
    console.log("paiement non reussi")
  }
  // Return and display the result of the charge.
}

