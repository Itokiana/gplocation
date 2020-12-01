import React from 'react'
import axios from '../../axios'
import { NavLink } from 'react-router-dom'
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda  } from '@syncfusion/ej2-react-schedule'


class Planning extends React.Component{
    state = {
        categorie: [],
        voiture: []
    }

    componentDidMount() {
        this.getCategories()
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
    
    render(){
        return(
            <>
            {
                
            }
            <ScheduleComponent>
                <Inject services={[Month, Agenda]} />
            </ScheduleComponent>
            </>
        )
    }

}
export default Planning;

