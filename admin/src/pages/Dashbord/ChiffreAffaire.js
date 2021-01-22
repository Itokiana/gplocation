import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios'
import moment from 'moment'



export default class ChiffreAffaire extends Component {
  // displayName: 'LineExample'
  state ={
    dateMonment: moment(),
    reservation:[],
    objet: [],
    //dataMonth: []
  }
  daysInMonths = () => {
    return this.state.dateMonment.daysInMonth(); // nombre de jour dans un moi
  }
  componentDidMount(){
    this.getResvation()
  }
  getResvation(){
    axios.get('/reservation/liste').then(res =>{
      if(res.status===200){
        this.setState({
          reservation: res.data,
          objet: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
        })
      }
      
      console.log(this.state.reservation)
    })
  }
  // dataMonths(){
  //   const tabJour=[]
  //   for(let i=1; i <= this.daysInMonths() ; i++){
  //     tabJour.push(i)
  //   }
  //   return tabJour
  // }
  datas(){
    let reservation = this.state.reservation
    let datemoment = this.state.dateMonment
    const filtreMois = reservation.filter(unmois => moment(unmois.update_at).format("D Y") === datemoment.format("D Y"))
    const objetData = {}
    for(let i=1; i <= this.daysInMonths() ; i++){
      let prix$i = 0
      filtreMois.map(res => {
        let jour = parseInt(moment(res.updated_at).format("D"))
        if (jour === i){
          prix$i = prix$i + res.prix
        }
      })
      //console.log(`prix${i}`, prix$i)
      objetData[i] = prix$i
    }
    return objetData
  }

  render() {
    //console.log(this.state.dateMonment.daysInMonth())
   
    // console.log('key value', objetData)
    // console.log('key', Object.keys(objetData))
    // console.log('value', Object.values(objetData))

    const data = {
      labels: Object.keys(this.datas()),
      datasets: [
        {
          label: 'My First dataset',
          fill: true,
          lineTension: 0.3,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 3,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: Object.values(this.datas())
          //data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
    return (
      <div>
        <h2>Line Example</h2>
        <div style={{background: "white"}}>
          <Line data={data} />
          {/* {this.state.objet ? <Line data={data} />: <h1>Loading ...</h1>} */}
        </div>
      </div>
    );
  }
};