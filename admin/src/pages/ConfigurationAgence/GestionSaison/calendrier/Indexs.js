import React from 'react';
import moment, { weekdaysShort } from 'moment';
import Days from './Days'
import Month from './Month'

class Indexs extends React.Component {
    state= {
        date: moment()
    }

    weekdaysShort = moment.weekdaysShort();
    years = () => {
        return this.state.date.format("Y") // annee de la date aujourdhui

    }


    render() {
        let weekdays = this.weekdaysShort.map((day) => { 
                return ( 
                
                    <td key={day} className= "week-day"> {day}</td>
                )

            }
             
        );
        
        return (
            <div>
                <center><h1><span className="calendar-label text-white">
                {this.years()}</span>  </h1></center>
                <div className="bg-white rounded ">
                    <table className="overflow-x text-black" >
                        <thead className="bg-dark text-white">
                            <tr>
                            
                            </tr>
                            <tr>
                                <td>
                                    Mois\jour
                                </td>
                            {weekdays}
                            {weekdays}
                            {weekdays}
                            {weekdays}
                            {weekdays}
                            {weekdays}
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr> 
                                <td>

                                </td>
                                
                            </tr>
                        <Month/>
                        
                        </tbody>

                    </table>
                </div> 
                
            </div>
            
            
        )
    }
}
 export default Indexs;