import React from 'react';



import Slider from './Components/Slider/Slider.js';
import Search from './Components/Search/Search.js';
import World from './Components/World/World.js'
import HomeAuto from './Components/HomeAuto/HomeAuto.js';

class HomePage extends React.Component {

	render() {

		return (
			<>
				<Slider />
				<Search />
				<World />
				<HomeAuto/>
			</>
		)
	}
}


export default HomePage;