import React from 'react';
import axios from '../../../../axios';
import './World.css'

class World extends React.Component {
	constructor() {
		super();
		this.state = {
			voitures: [],
			currentPage: 1,
			todosPerPage: 3
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event) {
		this.setState({
			currentPage: Number(event.target.id)
		});
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
		// const { voitures } = this.state;
		const { currentPage, todosPerPage, voitures } = this.state;
		const indexOfLastTodo = currentPage * todosPerPage;
		const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
		const currentTodos = voitures.slice(indexOfFirstTodo, indexOfLastTodo);
		const renderTodos = currentTodos.map((voiture) => {
			return (
				<div className="col-sm-4 col-xs-12" key={voiture.id}>
					<div className="b-world__item wow zoomInUp" data-wow-delay="0.3s">
						<img className="img-voiture" src={`http://fd0b515.online-server.cloud/${voiture.image.url}`} alt={voiture.marque} />

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
				</div>
			)
		});

		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(voitures.length / todosPerPage); i++) {
			pageNumbers.push(i);
		}
		const renderPageNumbers = pageNumbers.map(number => {
			return (

				<ul class="pagination" style={{backgroundColor: "rgb(120, 120, 120)", margin: "5px"}}>
					<li style={{margin: "10px", cursor: 'pointer',fontSize: "20px", color:'white'}} class="page-items" key={number} id={number}
						onClick={this.handleClick}>
						{number}
					</li>
				</ul>
				
			);
		});

		return (
			<>
				<section id="voitures" className="b-world">
					<section className="b-slider">
						<div id="carousel" className="slide carousel carousel-fade">
							<div className="carousel-inner">
								<div className="item active">
									<div className="container">
										<div className="row">
											{renderTodos}
										</div>

									</div>
								</div>
							</div>

						</div>
						<div >{renderPageNumbers}</div>
					</section>

				</section>
				
					
			


			</>
		)
	}
}


export default World;