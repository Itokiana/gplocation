import React from 'react'
import {useParams} from 'react-router-dom'
import Slider from './Components/Slider/Slider.js';
import Search from './Components/Search/Search.js';
import World from './Components/World/World.js'
import HomeAuto from './Components/HomeAuto/HomeAuto.js';


export function HomePage() {
	
	return (
		<div>
				<Slider />
				<Search />
				<World />
				<HomeAuto/>
		</div>
	)
}


export default HomePage;