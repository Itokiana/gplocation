import React from 'react';
import axios from '../../../../axios';
import './World.css'

class World extends React.Component {
	state = {
		voitures: [],
	}

	componentDidMount() {
		this.getVoiture();
	}

	getVoiture = () => {
		axios.get('/voitures').then(response => {
			if (response.status === 200) {
				this.setState({
					voitures: response.data

				})
				console.log(response.data)
			}
		})
	}
	

	render() {
		const { voitures } = this.state;
		return (
			<>
				<section id="voitures" className="b-world">
				<section className="b-slider"> 
					<div id="carousel" className="slide carousel carousel-fade">
						<div className="carousel-inner">
							<div className="item active">
								<div className="container">
									<div className="row">
										{voitures.map(voiture =>
											(<div className="col-sm-4 col-xs-12" key={voiture.id}>
												<div className="b-world__item wow zoomInUp" data-wow-delay="0.3s">
													<img className="img-voiture" src={`http://fd0b515.online-server.cloud/${voiture.image.url}`} alt={voiture.marque}/>
													<div className="b-world__item-val">
														<span className="b-world__item-val-title">{voiture.marque}</span>
													</div>
													<h2>{voiture.model}</h2>
													
														<ul>
															<li>{voiture.places} places</li>
															<li>Boîte {voiture.vitesse}</li>
															<li>{voiture.mode}</li>
															<li>Climatisation : {voiture.climatisation}</li>
														</ul>
													
												</div>
											</div>)
										)
										}


									</div>
								</div>
							</div>
						</div>
						
					</div>
					</section>
				</section>

			</>
		)
	}
}


export default World;