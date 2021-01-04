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



// import React from "react";
// import { DateRangePicker } from "materialui-daterange-picker";
// import moment from 'moment'


// class Indexs extends React.Component {
//  CalendrierComponent = props => {
//     // const [open, setOpen] = React.useState(true);
//     const [dateRange, setDateRange] = React.useState();


//     let date = (range) => {
//         setDateRange({
//         range
//         })
//         props.prom({
//         range
//         })
//     }
//     const toggle = () => setOpen(open);
//     const today = new moment().subtract(1, 'days');

//     return (

//         <DateRangePicker
//         disablePast={true}
//         minDate={today}
//         open={open}
//         toggle={toggle}
//         onChange={(range) => date(range)}
//         format={"DD/YYYY/MM"}
        
//         />
//     );
//     }
//     render() {
//         return (

//             <>
//             {
//              this.CalendrierComponent   
//             }
//             </>
//         )
//     }
// }
// export default Indexs;