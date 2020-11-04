import React from 'react';
import axios from '../../../../axios';

class World extends React.Component {
	state = {
		voitures: []
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
			}
		})
	}

	render() {
		const { voitures } = this.state;
		return (
			<>
				<section id="voitures" className="b-world">
					<div className="container">
						<div className="row">
							{voitures.map(voiture =>
								(<div className="col-sm-4 col-xs-12">
									<div className="b-world__item wow zoomInUp" data-wow-delay="0.3s">
										<img className="img-responsive" src="media/370x200/C1.jpg" alt="mazda" />
										<div className="b-world__item-val">
											<span className="b-world__item-val-title">{voiture.marque}</span>
										</div>
										<h2>{voiture.model}</h2>
										<p>
											<ul>
												<li>{voiture.places} places</li>
												<li>Boîte {voiture.vitesse}</li>
												<li>{voiture.mode}</li>
												<li>Climatisation : {voiture.climatisation}</li>
											</ul>
										</p>
									</div>
								</div>)
							)
							}


						</div>
					</div>
				</section>

			</>
		)
	}
}


export default World;