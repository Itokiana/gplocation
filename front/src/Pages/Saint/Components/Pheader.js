import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 class Pheader extends Component {
    direction(){
		sessionStorage.setItem('lieu_depart_predefinie',"Sainte-Marie")
		sessionStorage.setItem('lieu_retour_predefinie',"Sainte-Marie")
	}
    render() {
        return (
            <div>
                <section className="b-pageHeader">
                    <div className="container">
                        <h1 className="wow zoomInLeft" data-wow-delay="0.7s" style={{visibility: "visible", animationDelay: "0.7s", animationName: "zoomInLeft"}}>Sainte-Marie</h1>
                        <div className="b-pageHeader__search wow zoomInRight" data-wow-delay="0.7s" style={{visibility: "visible", animationDelay: "0.7s", animationName: "zoomInRight"}}>
                        <Link className='aeroporo' to='/' onClick={this.direction}><h3>Location de voiture à Sainte-Marie</h3></Link>
                        </div>
                    </div>
                </section>

                <div className="b-breadCumbs s-shadow">
                <div className="container">
                    <a href="/" className="b-breadCumbs__page">Accueil</a><span className="fa fa-angle-right"></span><a href="#" className="b-breadCumbs__page m-active">Sainte-Marie</a>
                </div>
                </div>

                <section className="b-more">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-xs-12">
                                <div className="b-more__why wow zoomInLeft" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "ZoomInLeft"}}>
                                    <center><h2 className="s-title">Besoin d'une voiture de location à Sainte-Marie ?</h2></center>
                                    <p className="text-center paddingp mbottom10">Pour louer une voiture à Sainte-Marie, rien de plus simple ! <b>Réservez votre voiture en ligne et pas cher avec GP Location.</b></p>
                                    <div className="row">
                                        <div className="col-sm-6 col-xs-12">
                                            <div className="b-article__main-related-item wow zoomInUp" data-wow-delay="0.5s">
                                                <div className="row m-smallPadding">
                                                    <div className="col-xs-4">
                                                        <img className="center-block img-responsive" src="media/about/reservation.jpg" alt="related" />       
                                                    </div>
                                                    <div className="col-xs-8">
                                                        <h5><a>Vous effectuez votre réservation en ligne</a></h5>  
                                                        <div className="b-blog__posts-one-body-head-notes">
                                                           <span className="b-best__info"><strong>Réservez 7j/7 24h/24 </strong>votre voiture de location au meilleur prix sur notre site Internet.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-xs-12">
                                            <div className="b-article__main-related-item wow zoomInUp" data-wow-delay="0.5s">
                                                <div className="row m-smallPadding">
                                                    <div className="col-xs-4">
                                                        <img className="center-block img-responsive" src="media/about/reservation.jpg" alt="related" />       
                                                    </div>
                                                    <div className="col-xs-8">
                                                        <h5><a>Confirmation de votre location</a></h5>  
                                                        <div className="b-blog__posts-one-body-head-notes">
                                                            <span className="b-best__info"><strong>Votre confirmation de réservation </strong>est envoyée par email prête à être imprimée.</span>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
export default Pheader;