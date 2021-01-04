import React from 'react'
import axios from '../../axios'
import { NavLink } from 'react-router-dom'
import moment from 'moment'
import './Planning.css'
import { ScheduleComponent, getWeekNumber, HeaderRowDirective, HeaderRowsDirective, TimelineMonth, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { Internationalization, extend } from '@syncfusion/ej2-base';

class Planning extends React.Component{
    constructor() {
        super(...arguments)
        this.localData = [
            {
                Id:1,
                Subject: "Marco",
                dale:"sur",
                StartTime: new Date(2020, 0, 2, 6, 0),
                EndTime: new Date(2020, 0, 2, 9, 0)
            },
            {
                Id:2,
                Subject: "Donald",
                StartTime: new Date(2020, 0, 5, 7, 0),
                EndTime: new Date(2020, 0, 5, 18, 0)
            },
            {
                Id:3,
                Subject: "Don",
                StartTime: new Date(2020, 0, 5, 7, 0),
                EndTime: new Date(2020, 0, 9, 8, 0)
            },
        ]
        this.instance = new Internationalization()
    }
    state = {
        categories: [],
        voiture: [],
        reservation:[],
        clients: []
    }

    componentDidMount() {
        this.getCategories()
        this.getReservation()
        this.getVoiture()
        this.getClient()
    }

    getCategories = () => {
		axios.get(`/categories`).then(response => {
			if (response.status === 200) {
				this.setState({
					categories: response.data
				});
				console.log(this.state.categories);
			}
		});
    };
    getClient = () => {
		axios.get(`/clients`).then(response => {
			if (response.status === 200) {
				this.setState({
					clients: response.data
				});
				console.log(this.state.clients);
			}
		});
    };
    getVoiture = () => {
        axios.get(`/voitures`).then(response => {
			if (response.status === 200) {
				this.setState({
					voiture: response.data
				});
				console.log(this.state.voiture);
			}
		});

    }
    getReservation = () => {
		axios.get(`reservation/liste`).then(response => {
			if (response.status === 200) {
				this.setState({
					reservation: response.data
				});
				console.log(this.state.reservation);
			}
		});
    };
    getYearDetails(value) {
        return 'Year: ' + this.instance.formatDate(value.date, { skeleton: 'y' });
    }
    getMonthDetails(value) {
        return 'Month: ' + this.instance.formatDate(value.date, { skeleton: 'M' });
    }
    getWeekDetails(value) {
        return 'Week ' + getWeekNumber(value.date);
        ;
    }
    yearTemplate(props) {
        return (<span className="year">{this.getYearDetails(props)}</span>);
    }
    monthTemplate(props) {
        return (<span className="month">{this.getMonthDetails(props)}</span>);
    }
    weekTemplate(props) {
        return (<span className="week">{this.getWeekDetails(props)}</span>);
    }
    data(obj) {

        const filtreVoiture =  this.state.voiture.filter(person => person.category_id == obj.id);
        const tab = []
        //console.log(filtreVoiture)
        filtreVoiture && filtreVoiture.map((voiture, key) => {
            const filtreResrvation = this.state.reservation.filter(res => res.voiture_id == voiture.id)
            if (filtreResrvation.length === 0){
                console.log("nodataReservation")
            }
            else{
                const resrvCat = filtreResrvation[0]
                const Client = this.state.clients.filter(client => client.id === resrvCat.client_id)
                console.log("Reservation", resrvCat)
                console.log("client", Client)
                if (Client.length === 0){
                    console.log("nodataClient")
                }
                else{
                    
                    const res$key = {}
                    res$key["Id"] = key+1
                    res$key["Subject"] = Client[0].nom
                    res$key["StartTime"] = new Date(`${resrvCat.date_depart} ${resrvCat.heure_depart}`)
                    res$key["EndTime"] = new Date(`${resrvCat.date_retour} ${resrvCat.heure_retour}`)
                    //res$key["Color"] = 'red'
                    tab.push(res$key)

                }
            }  
        })
        console.log(tab)
        return tab
    }
    
    render() {

        return (
            <>
            {this.state.categories.map(value => {
                return (
                    <>
                        <div className="text-white">
                            <div className="d-flex align-items-start m-1">
                                <img src="images/Spark.jpg" alt="image"/>
                                
                                <div className="m-1">
                                    <h1>Categorie: {value.name} </h1>
                                    <span>Stock : {value.stock} vehicule</span>
                                </div>
                            </div>
                            
                            <ScheduleComponent width='100%' height='250px' selectedDate={new Date()} eventSettings={{ dataSource: this.data(value) }}>
                                <HeaderRowsDirective>
                                {/* <HeaderRowDirective option='Year' template={this.yearTemplate.bind(this)}/>
                                <HeaderRowDirective option='Month' template={this.monthTemplate.bind(this)}/> */}
                                <HeaderRowDirective option='Week' template={this.weekTemplate.bind(this)}/>
                                <HeaderRowDirective option='Date'/>
                                </HeaderRowsDirective>
                                <ViewsDirective>
                                <ViewDirective option='TimelineMonth'/>
                                </ViewsDirective>
                                <Inject services={[TimelineMonth]}/>
                            </ScheduleComponent>
                            <br/><br/>
                        </div>
                    </>
                )
            })}

                
            </>
                
                   
        
        )
    }

}
export default Planning;

