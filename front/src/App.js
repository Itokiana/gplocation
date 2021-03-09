import React, {Component} from 'react';
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
import Profil from './Pages/Login/Profil/Profil';
import NotFound from './Pages/404/NotFound'
import Password from './Pages/Login/Password'
import FindEmail from './Pages/Login/Find_email'
import Mentions from './Pages/Mentions/Mentions.js';
import axios from './axios';
import {PrivateRoute} from './Helpers/PrivateRoute';
import Footer from './Pages/Footer/Footer.js';

//import './App.scss';
// import React, { Component } from 'react'

export default class App extends Component {
  state = [
    
  ];
  // initializeAnalytics(){
  //   ReactGa.initialize('G-2N9KD7XPZD')
  //   ReactGa.pageview(window.location.pathname + window.location.search)
  // }
  
  componentDidMount = () => {
    if(sessionStorage.id){
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
  if(sessionStorage.id)
  {
    return (  
      <Router>
          <Header client={this.state.user}/> 
          <Switch>

            <Route exact path='/' component={HomePages}/>
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/aeroport' component={Aeroport}/>
            <Route exact path='/sainte-marie' component={Saint}/>
            <Route exact path='/condition' component={Condition}/>
            <Route exact path='/mentions-legales' component={Mentions}/>
            <PrivateRoute exact path='/profil' component={() => <Profil client={this.state.user}/>} />
            <Route exact path='/reserver/:id/:prix' component={Reserver}/>
          
            
            <Route component={NotFound}/>
          {/* <Route exact path='/Signup' component={Signup} /> */}  
          </Switch>
          <Footer /> 
    </Router>
    )
  }

  else{
    return(
      <Router>
          <Header /> 
          <Switch>
            <Route exact path='/' component={HomePages}/>
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/aeroport' component={Aeroport}/>
            <Route exact path='/sainte-marie' component={Saint}/>
            <Route exact path='/condition' component={Condition}/>
            <Route exact path='/mentions-legales' component={Mentions}/>
            <PrivateRoute exact path='/reserver/:id/:prix' component={Reserver}/>
            <Route exact path='/login' component={Login} />
            <Route exact path='/cofirmation_email' component={Email_conf}/>
            <Route exact path='/find-email' component={FindEmail}/>
            <Route exact path='/password/:token'  component={Password}/>
            <Route component={NotFound}/>
          {/* <Route exact path='/Signup' component={Signup} /> */}  
          </Switch>
          <Footer /> 
    </Router>
    )
  }
    
  }
}


