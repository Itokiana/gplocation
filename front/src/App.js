import React, { Component } from 'react';
import ReactGA from 'react-ga'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Email_conf from './Pages/Login/Email_confirmation.js'
import Header from './Pages/Header/Header.js';
import HomePages from './Pages/HomePages/HomePage.js';
import Contact from './Pages/Contact/Contact.js';
import Login from './Pages/Login/Login.js';
import Signup from './Pages/Signup/Signup.js';
import Aeroport from './Pages/Aeroport/Aeroport.js';
import Saint from './Pages/Saint/Saint.js';
import Condition from './Pages/Condition/Condition.js';
import Reserver from './Pages/HomePages/Components/Reservation/Reserver/Reserver.js';
import Felicitation from './Pages/HomePages/Components/Reservation/Felicitation';
import ErreurReserv from './Pages/HomePages/Components/Reservation/Erreur_res';
import Profil from './Pages/Login/Profil/Profil';
import NotFound from './Pages/404/NotFound'
import Password from './Pages/Login/Password'
import FindEmail from './Pages/Login/Find_email'
import Mentions from './Pages/Mentions/Mentions.js';
import axios from './axios';
import { PrivateRoute } from './Helpers/PrivateRoute';
import Footer from './Pages/Footer/Footer.js';
import PaimentStripe from './Pages/HomePages/Components/Reservation/Reserver/Paiment/PaimentStripe.js'
import PaimentStripe_devis from './Pages/HomePages/Components/Reservation/Reserver/Paiment_devis/PaimentStripe_devis.js'

//import './App.scss';
//import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      someData: null,
    };

    // Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
    // ReactGA.initialize('G-9ZVEBWJD7T');
    // // This just needs to be called once since we have no routes in this case.
    // ReactGA.pageview(window.location.pathname);
  }

  initializeAnalytics() {
    ReactGA.initialize('G-XWNX24WHLD');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  componentDidMount = () => {
    if (sessionStorage.id) {
      axios.put(`/clients/${sessionStorage.id}`).then(response => {
        if (response.status === 200) {

          this.setState({
            user: response.data
          })

          console.log(response.data)
        }

      })
    }

  };

  render() {
    // this.initializeAnalytics()
    if (sessionStorage.id) {
      return (
        <Router>
          <Header client={this.state.user} />
          <Switch>

            <Route exact path='/' component={HomePages} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/aeroport' component={Aeroport} />
            <Route exact path='/sainte-marie' component={Saint} />
            <Route exact path='/condition' component={Condition} />
            <Route exact path='/mentions-legales' component={Mentions} />
            <Route exact path='/felicitation' component={Felicitation} />
            <Route exact path='/reserver/:signe/:id/:prix/:count' component={Reserver} />
            <Route exact path='/paiment' component={PaimentStripe}/>
            <Route exact path='/paiment_devis/:id/:prix' component={PaimentStripe_devis}/>
            <Route exact path='/error_res' component={ErreurReserv} />
            <PrivateRoute exact path='/profil' component={() => <Profil client={this.state.user} />} />

            <Route component={NotFound} />
            {/* <Route exact path='/Signup' component={Signup} /> */}
          </Switch>
          <Footer />
        </Router>
      )
    }

    else {
      return (
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePages} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/aeroport' component={Aeroport} />
            <Route exact path='/sainte-marie' component={Saint} />
            <Route exact path='/condition' component={Condition} />
            <Route exact path='/mentions-legales' component={Mentions} />
            <Route exact path='/reserver/:signe/:id/:prix/:count' component={Reserver} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/paiment' component={PaimentStripe}/>
            <Route exact path='/felicitation' component={Felicitation} />
            <Route exact path='/paiment_devis/:id/:prix' component={PaimentStripe_devis}/>
            <Route exact path='/cofirmation_email' component={Email_conf} />
            <Route exact path='/find-email' component={FindEmail} />
            <Route exact path='/password/:token' component={Password} />
            <Route component={NotFound} />
            {/* <Route exact path='/Signup' component={Signup} /> */}
          </Switch>
          <Footer />
        </Router>
      )
    }

  }
}


