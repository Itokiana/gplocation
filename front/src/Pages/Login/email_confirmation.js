import React, { Component } from 'react'

export class Affirmation extends Component {
    render() {
        return (
            <div>
                <section className="b-pageHeader">
                    <div className="container">
                        <h1 className="wow zoomInUp" data-wow-delay="0.7s">Veiller verifier votre boite email </h1>
                    </div>
                </section>

                <div className="b-breadCumbs s-shadow">
                    <div className="container">
                        <a href="/" className="b-breadCumbs__page">Home</a><span className="fa fa-angle-right"></span><a href="/email_confirmation" className="b-breadCumbs__page m-active">email</a>
                    </div>
                </div>

                <section className="b-error s-shadow">
                    <div className="container">
                        <h1 className="wow zoomInUp" data-wow-delay="0.7s"> {localStorage.nom}</h1>
                        <h2 className="s-lineDownCenter wow zoomInUp" data-wow-delay="0.7s">En attente de votre confirmation.</h2>
                        <p className="wow zoomInUp" data-wow-delay="0.7s">Nous avons envoyer un confirmation dans votre boite email {localStorage.emailClient} veiller confirmer pour finir votre inscription. ou cliquer <a onClick={() => localStorage.clear(window.location.href='/')}>ACCUEIL</a> p.</p>
                        <h3 className="s-title wow zoomInUp" data-wow-delay="0.7s">GP LOCATION VOUS REMERCI</h3>
                       
                    </div>
                    <img alt="audi" src="images/backgrounds/404Bg.jpg" className="img-responsive center-block b-error-img" />
                </section>
            </div>
        )
    }
}

export default Affirmation