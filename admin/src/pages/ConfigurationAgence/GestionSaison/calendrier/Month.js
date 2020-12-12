import React from 'react';
import moment, { weekdaysShort } from 'moment';
import Days from './Days'
// import Calendar from 'react-calendar';
//import { number } from 'prop-types';


class Month extends React.Component {
    
   
   
    state = {
        dateObj: moment(),
        
    }
    constructor (propos) {
        super(propos);
    }
    weekdays = moment.weekdays();
    
    months  = moment.months();

    
    month = () => {
        return this.state.dateObj.format("MMMM") // Moi de la date aujourdhui

    }
   
    currentDate = () => {
        return this.state.dateObj.get("date");
    }
    
    

    render() {
       
        let months = this.months.map((mon) => {
            let className = (mon == "");
            return (
                <>
                
                <tr key={mon} className= {className}>
                     <td> {mon} </td>
                     <Days month ={mon}/>

                </tr>
                </>
            )
            
        });
        
        return (
            <>
            {months}
            </>
            )
    }
}
 export default Month;

