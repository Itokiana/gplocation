import React from 'react';
import moment, { weekdaysShort } from 'moment';
// import Calendar from 'react-calendar';
import { number } from 'prop-types';


class Indexs extends React.Component {
    
   
   
    state = {
        dateContext: moment(),
        today: moment,
        showMonthPopup: false,
        showYearsPopup: false
    }
    constructor (propos) {
        super(propos);
    }
    weekdays = moment.weekdays();
    weekdaysShort = moment.weekdaysShort();
    months  = moment.months();

    years = () => {
        return this.state.dateContext.format("Y") // annee de la date aujourdhui

    }
    month = () => {
        return this.state.dateContext.format("MMMM") // Moi de la date aujourdhui

    }
    daysInMonth = () => {
        return this.state.dateContext.daysInMonth(); // nombre de jour dans un moi
    }
    currentDate = () => {
        return this.state.dateContext.get("date");
    }
    currentDay = () => {
        return this.state.dateContext.format("D");
    }
    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d'); // iteration 0, 1, ...6
        return firstDay;
    }

    render() {
        let weekdays = this.weekdaysShort.map((day) => { 
                return ( 
                
                    <td key={day} className= "week-day"> {day}</td>
                )

            }
             
        );
        
        
        let months = this.months.map((month) => {
            return (
                <tr key={month} className= "week-day"> {console.log(month)}</tr>
            )
            
        });
        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<td className="emptySlot">
                {"  "}
            </td>);
        }
        console.log("blanks :",);
        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            let className = (d == this.currentDay() ? "day current-day" : "day");
            daysInMonth.push(
                <td key={d} className={className} >
                    <span>{d}</span>
                </td>
            );
        }
        var totalSlots = [...blanks, ...daysInMonth];
        let trElement = totalSlots.map((jour, j) => {
            return (
                <td key={j*10} >
                    {jour}
                </td>
            )

        })

        // totalSlots.forEach(())

        console.log("days:", this.firstDayOfMonth() );
        return (
            <div>
                <table className="w-100 text-white">
                    <thead>
                        <tr>
                            <td>
                                Mois\jour
                            </td>
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
                            {trElement}
                        </tr>
                       
                    </tbody>

                </table>
            </div>
            
        )
    }
}
export default Indexs;
