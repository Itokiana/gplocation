import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeAuto.css';
 class HomeAuto extends Component {
    render() {
        return (
            <div>
                <section className="b-article">
						<div className="container">
							<div className="row">
								<div className="col-md-9 col-xs-12">
									<div className="b-article__main">
										<div className="b-blog__posts-one">
											<div className="row m-noBlockPadding">
												<div className="col-sm-11 col-xs-10">
													<div className="text-justify b-blog__posts-one-body">
														<header className="b-blog__posts-one-body-head wow zoomInUp" data-wow-delay="0.5s">
															<h2 className="s-titleDet">Découvrir l'île de la Réunion à bord d'une voiture de location</h2>
														</header>
														<div className="b-blog__posts-one-body-main wow zoomInUp" data-wow-delay="0.5s">
															<div className="b-blog__posts-one-body-main-img">
																<ul className="bxslider enable-bx-slider" data-pager-custom="#bx-pager" data-mode="fade" data-pager-slide="false" data-mode-pager="horizontal" data-pager-qty="0">
																	<img className="img-responsive" src="media/750x300/blogBig1.jpg" alt="jaguar" />
																</ul>
															</div>
															<p>Pour découvrir l'île de la Réunion, une voiture est indispensable. En effet, le réseau de transport public étant limité, avec une voiture de location vous serez libre dans vos déplacements.</p>
															<blockquote>
															Avec le kilométrage illimité inclus dans notre offre de location, vous pourrez sillonner l'île d'un bout à l'autre sereinement. GP location met à votre disposition un large choix de véhicules récents, voire neufs, au sein de sa flotte automobile.
															</blockquote>
															<p>Que vous veniez seul ou en famille, vous trouverez une voiture adaptée à vos besoins. Notre agence étant située à cinq minutes de l'aéroport de Saint-Denis, nous pouvons vous prendre en charge dès votre sortie de l'avion. Avec notre accueil personnalisé, vous n'aurez pas à attendre et pourrez partir directement rejoindre votre lieu de résidence ou explorer les alentours.</p>
															<p>Nous pouvons vous fournir un siège bébé, un réhausseur ou encore un GPS si besoin. Notre agence étant ouverte sept jours sur sept, y compris les jours fériés, tout est mis en œuvre pour que vous passiez un séjour inoubliable sur l'île de la Réunion.

																	D’un rapport qualité/prix très attractif, notre offre de location de voiture aura de quoi vous séduire !</p>
														</div>
														<div className="b-blog__posts-one-body-why wow zoomInUp" data-wow-delay="0.5s">
															<div className="s-lineDownLeft  s-titleLeft">
																<div>
																	<h2 className="s-titleDet">Les avantages GP Location</h2>
																</div>
															</div>
															<div className="clearfix"></div>
															
															<ul className="s-list">
																<li><span className="fa fa-check"></span>Prise en charge à l'aéroport ou au port avec votre véhicule </li>
																<li><span className="fa fa-check"></span>Kilométrage illimité, assurances incluses </li>
																<li><span className="fa fa-check"></span>Assistance 7j/7, 24h/24  </li>
																<li><span className="fa fa-check"></span>Large choix de véhicules récents </li>
																<li><span className="fa fa-check"></span>Ouvert 7j/7 y compris jours fériés </li>

															</ul>
															<div className="row">
															<header className="b-blog__posts-one-body-head wow zoomInUp" data-wow-delay="0.5s">
															<h2 className="s-titleDet">Des visites incontournables sur l'île de la Réunion</h2>
														</header>
																<div className="col-sm-6 col-xs-12">
																	
																	<img src="media/articles/article.jpg" className="img-responsive"  alt="nissan"/>
																</div>
																<div className="col-sm-6 col-xs-12">
																	<p className="m-smallMargin">Cette île volcanique, située en plein cœur de l'océan Indien, vous offrira des expériences inoubliables. Comme la plongée sous-marine, au milieu des différentes espèces aquatiques telles que les dauphins, les baleines, les tortues marines ou encore les requins. Avec votre voiture de location, vous pourrez rejoindre le point de départ de nombreuses randonnées qui cheminent jusqu'en haut des différents pitons, dont le fameux Piton de la Fournaise, toujours en activité volcanique. Grâce à notre assistance, disponible sept jours sur sept et 24 h/24, vous n’aurez pas à vous soucier d’un quelconque ennui mécanique. </p>
																	
																</div>
															</div>
															<p>En voiture, vous pourrez rallier le sud de l’île pour rejoindre la ville de Saint-Pierre et profiter de son front de mer très animé. Ne manquez pas non plus la visite du Cirque de Mafate ou encore celui de Cilaos, qui vous offriront une vue grandiose et panoramique de l’île. L’île de la Réunion ayant une superficie de 2 500 km² environ, de nombreux endroits paradisiaques sont à découvrir. Les plages de sable fin aux eaux turquoise n’attendent que vous. C'est pourquoi notre gamme de véhicules de location est aussi variée, pour vous offrir un séjour unique et sécurisant.</p>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										
										
									</div>
								</div>
								<div className="col-md-3 col-xs-12">
									<aside className="b-blog__aside">
										
										<div className="b-blog__aside-categories wow zoomInUp" data-wow-delay="0.5s">
											<header className="s-lineDownLeft">
												<h2 className="s-titleDet"> Locations</h2>
											</header>
											<nav>
												<ul className="b-blog__aside-categories-list">
													<li><Link to="/Aeroport">Aéroport de la Réunion Roland-Garros</Link></li>
													<li className="m-active"><Link to="/">Accueil</Link></li>
													<br></br><br></br>
												</ul>
											</nav>
										</div>
										<div className="b-blog__aside-popular wow zoomInUp" data-wow-delay="0.5s">
											<header className="s-lineDownLeft">
												<h2 className="s-titleDet">Aéroport de la Réunion Roland-Garros</h2>
											</header>
											<div className="b-blog__aside-popular-posts">
												<div className="b-blog__aside-popular-posts-one">
													<img className="img-responsive" src="media/270x150/acura.jpg" alt="merc" />
													
												</div>
												<header className="s-lineDownLeft">
												<h2 className="s-titleDet">Sainte-Marie</h2>
											</header>
												<div className="b-blog__aside-popular-posts-one">
													<img className="img-responsive" src="media/270x150/amg.jpg" alt="outlander" />
													
												</div>
											</div>
										</div>
										<div className="b-blog__aside-text wow zoomInUp" data-wow-delay="0.5s">
											<header className="s-lineDownLeft">
												<h2 className="s-titleDet">La Réunion?</h2>
											</header>
											<p>Située dans l’archipel des Mascareignes, l’île de La Réunion, département français d’Outre-mer, offre au voyageur le dépaysement d’une île tropicale de l’océan Indien. Au carrefour des influences de l’Afrique, de l’Asie et de l’Europe, La Réunion est une terre de métissage.</p>
										</div>
										<div className="b-blog__aside-reviews wow zoomInUp" data-wow-delay="0.5s">
											<header className="s-lineDownLeft">
												<h2 className="s-titleDet">La Réunion vous offre la beauté des paysages tropicaux du littoral</h2>
											</header>
											<div className="b-blog__aside-reviews-posts">
												<div className="b-blog__aside-reviews-posts-one">
													<div className="row m-smallPadding">
														<div className="col-xs-5">
															<img src="media/100x80/audiRev.jpg" alt="audi" className="img-responsive pull-right" />
														</div>
														<div className="col-xs-7">
															<div className="b-blog__aside-reviews-posts-one-info">
																<p>Volcan<br/>Piton de la fournaise </p>
																<div className="b-world__item-val">
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="b-blog__aside-reviews-posts-one">
													<div className="row m-smallPadding">
														<div className="col-xs-5">
															<img src="media/100x80/mercRev.jpg" alt="merc" className="img-responsive  pull-right" />
														</div>
														<div className="col-xs-7">
															<div className="b-blog__aside-reviews-posts-one-info">
																<p>La Réserve Naturelle<br/> Marine</p>
																<div className="b-world__item-val">
																	
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="b-blog__aside-reviews-posts-one">
													<div className="row m-smallPadding">
														<div className="col-xs-5">
															<img src="media/100x80/mazdaRev.jpg" alt="" className="img-responsive  pull-right" />
														</div>
														<div className="col-xs-7">
															<div className="b-blog__aside-reviews-posts-one-info">
																<p>Belouve <br /> la forêt primaire</p>
																<div className="b-world__item-val">
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</aside>
								</div>
							</div>
							<div className="b-article__main-related s-shadow">
							<div className="s-lineDownLeft  s-titleLeft">
												<div>
													<h2 className="s-titleDet wow zoomInUp" data-wow-delay="0.5s">Partenariat</h2>
												</div>
											</div>
											<div className="clearfix"></div>
												<div className="row">
													<div className="col-sm-6 col-xs-12">
														<div className="b-article__main-related-item wow zoomInUp" data-wow-delay="0.5s">
															<div className="row m-smallPadding">
																<div className="col-xs-12">
																	<img className="center-block img-responsive" src="media/100x80/related1.jpg" alt="related" />       
																</div>
																
															</div>
														</div>
													</div>
													<div className="col-sm-6 col-xs-12">
														<div className="b-article__main-related-item wow zoomInUp" data-wow-delay="0.5s">
															<div className="row m-smallPadding">
																<div className="col-xs-12">
																	<img className="center-block img-responsive" src="media/100x80/related2.jpg" alt="related" />       
																</div>
															</div>
														</div>
													</div>
												
												</div>  
										</div>
								
										<br></br><br></br>

<div className="b-article__main-author wow zoomInUp" data-wow-delay="0.5s">
							
							<div className="row">
								
								<div className="col-xs-12 pull-right">
									<div className="col-xs-3">
									<h3><span>Avis de nos clients</span></h3><br /><br />
									<div className="start">
										<ul>
											<li>
												<span className="fa fa-star"></span>
											</li>
											<li>
												<span className="fa fa-star"></span>
											</li>
											<li>
												<span className="fa fa-star"></span>
											</li>
											<li>
												<span className="fa fa-star"></span>
											</li>
											<li>
												<span className="fa fa-star"></span>
											</li>
										</ul>
									</div>
									<div className="clearfix"></div>
									</div>
									<div className="col-xs-9">
									<p className="soratra"><strong>Marcellin.D pour une location à Aéroport de la Réunion Roland Garros du Dimanche 02 Août 2020 au <br></br> Mardi 25 Août 2020 : <br></br>“Oui”</strong></p>
									</div>
								</div>
							</div>

						</div>
						</div>
					</section>
            </div>
        )
    }
}

export default HomeAuto		