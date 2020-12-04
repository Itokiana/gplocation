import Calendar from './Calendar';
import React from 'react';

import CalendarControls from './CalendarControls';

class Indexs extends React.Component {
    render() {
        return (
            <div>
                <Calendar/>

                <CalendarControls/>
            </div>
            
        )
    }
}
export default Indexs;
