// import React, { Component } from 'react';
// import MDBFullCalendar from 'mdb-react-calendar';
// import { addHours, addDays, addWeeks, startOfWeek } from 'date-fns';

// const today = new Date();

// class Indexs extends Component {
//   state = {
//     tasks: [
//       {
//         id: 'task1',
//         title: 'Today',
//         startDate: new Date().setHours(0, 0, 0),
//         endDate: new Date().setHours(23, 59, 59),
//         color: 'danger',
//         dark: true,
//         link: true,
//         to: 'test',
//       },
//       {
//         id: 'task2',
//         title: 'Today',
//         startDate: new Date().setDate(2),
//         endDate: new Date().setDate(15),
//         color: 'info',
//         link: true,
//         to: 'test1',
//       },
//       {
//         id: 'task3',
//         title: 'Task name',
//         startDate: new Date().setDate(2),
//         endDate: new Date().setDate(15),
//         color: 'warning',
//         dark: true,
//         link: true,
//         to: 'test2',
//       },
//     ],
//   };

//   render() {
//     const arrOfObjects = [
//       { color: 'elegant-color', title: 'Test', dark: true },
//       { color: 'danger-color', title: 'Test1', dark: false },
//       { color: 'warning-color', title: 'Meeting', dark: false },
//       { color: 'success-color', title: 'Home', dark: false },
//       { color: 'info-color', title: 'Lunch', dark: false },
//       { color: 'default-color', title: 'Something', dark: false },
//       { color: 'primary-color', title: 'Pool', dark: false },
//       { color: 'secondary-color', title: 'Footbal', dark: true },
//     ];

//     return <MDBFullCalendar colors={arrOfObjects} tasks={this.state.tasks} btnSizes='sm' />;
//   }
// }


// export default Indexs;


import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class Indexs extends React.Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          
          
        />
        {console.log(this.state.date)}
      </div>
    );
  }
}
export default Indexs;

// import React from 'react';
// import moment, { weekdaysShort } from 'moment';
// // import Calendar from 'react-calendar';
// //import { number } from 'prop-types';


// class Indexs extends React.Component {
    
   
   
//     state = {
//         dateContext: moment(),
//         today: moment,
//         showMonthPopup: false,
//         showYearsPopup: false
//     }
//     constructor (propos) {
//         super(propos);
//     }
//     weekdays = moment.weekdays();
//     weekdaysShort = moment.weekdaysShort();
//     months  = moment.months();

//     years = () => {
//         return this.state.dateContext.format("Y") // annee de la date aujourdhui

//     }
//     month = () => {
//         return this.state.dateContext.format("MMMM") // Moi de la date aujourdhui

//     }
//     daysInMonth = () => {
//         return this.state.dateContext.daysInMonth(); // nombre de jour dans un moi
//     }
//     currentDate = () => {
//         return this.state.dateContext.get("date");
//     }
//     currentDay = () => {
//         return this.state.dateContext.format("D");
//     }
//     firstDayOfMonth = () => {
//         let dateContext = this.state.dateContext;
//         let firstDay = moment(dateContext).startOf('month').format('d'); // iteration 0, 1, ...6
//         return firstDay;
//     }
//     SelectList = (props) => {
//         let popup = props.data.map((data) => {
//             return (
//                 <div key={data}>
//                     {data}
//                 </div>
//             );
//         })
//         return (
//             <di className= "month-popup">

//                 {popup}
//             </di>
//         );
//     }
//     MonthNav = () => {
//         return (
//             <span className= "label-month">
//                 {/* {this.month()} */}
//                 <this.SelectList data={this.months} />
//             </span>
//         )
//     }

//     setMonth = (month) => {
//         let monthNo = this.months.indexOf(month)
//         let dateContext = Object.assign({}, this.state.dateContext);
//         dateContext = moment(dateContext).set("month", monthNo);
//         this.setState({
//             dateContext: dateContext
//         });
//     }

//     render() {
//         let weekdays = this.weekdaysShort.map((day) => { 
//                 return ( 
                
//                     <td key={day} className= "week-day"> {day}</td>
//                 )

//             }
             
//         );
        
        
//         let months = this.months.map((month) => {
//             return (
//                 <tr key={month} className= "week-day"> {month}</tr>
//             )
            
//         });
//         let blanks = [];
//         for (let i = 0; i < this.firstDayOfMonth(); i++) {
//             blanks.push(<td className="emptySlot">
//                 {"  "}
//             </td>);
//         }
//         console.log("blanks :",);
//         let daysInMonth = [];
//         for (let d = 1; d <= this.daysInMonth(); d++) {
//             let className = (d == this.currentDay() ? "day current-day" : "day");
//             daysInMonth.push(
//                 <td key={d} className={className} >
//                     <span>{d}</span>
//                 </td>
//             );
//         }
//         var totalSlots = [...blanks, ...daysInMonth];
//         let trElement = totalSlots.map((jour, j) => {
//             return (
//                 <td key={j*10} >
//                     {jour}
//                 </td>
//             )

//         })

//         // totalSlots.forEach(())

//         console.log("days:", this.firstDayOfMonth() );
//         return (
//             <div>
//                 <table className="w-100 text-white">
//                     <thead>
//                         <tr>
//                         <this.MonthNav/>
//                         </tr>
//                         <tr>
//                             <td>
//                                 Mois\jour
//                             </td>
//                         {weekdays}
//                         {weekdays}
//                         {weekdays}
//                         {weekdays}
//                         {weekdays}
                            
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr> 
//                             <td>

//                             </td>
//                             {trElement}
//                         </tr>
//                         {/* {months} */}
                       
//                     </tbody>

//                 </table>
                
//             </div>
            
            
//         )
//     }
// }
// export default Indexs;



// // import React from "react";
// // import { DateRangePicker } from "materialui-daterange-picker";
// // import moment from 'moment'


// // class Indexs extends React.Component {
// //  CalendrierComponent = props => {
// //     // const [open, setOpen] = React.useState(true);
// //     const [dateRange, setDateRange] = React.useState();


// //     let date = (range) => {
// //         setDateRange({
// //         range
// //         })
// //         props.prom({
// //         range
// //         })
// //     }
// //     const toggle = () => setOpen(open);
// //     const today = new moment().subtract(1, 'days');

// //     return (

// //         <DateRangePicker
// //         disablePast={true}
// //         minDate={today}
// //         open={open}
// //         toggle={toggle}
// //         onChange={(range) => date(range)}
// //         format={"DD/YYYY/MM"}
        
// //         />
// //     );
// //     }
// //     render() {
// //         return (

// //             <>
// //             {
// //              this.CalendrierComponent   
// //             }
// //             </>
// //         )
// //     }
// // }
// // export default Indexs;