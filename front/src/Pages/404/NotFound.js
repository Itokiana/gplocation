import React, { Component } from 'react'
import './Not_found.css';

export class NotFound extends Component {
    render() {
        return (
            <div>
                <section className="b-pageHeader">
                    <div className="container">
                        <h1 className="wow zoomInUp" data-wow-delay="0.7s">Error 404 Page</h1>
                    </div>
                </section>

                <div className="b-breadCumbs s-shadow">
                    <div className="container">
                        <a href="/" className="b-breadCumbs__page">Home</a><span className="fa fa-angle-right"></span><a href="/404" className="b-breadCumbs__page m-active">Page Not Found</a>
                    </div>
                </div>

                <section className="b-error s-shadow">
                    <div className="container">
                        <h1 className="wow zoomInUp" data-wow-delay="0.7s">Error</h1>
                        <img className="img-responsive center-block wow zoomInUp" data-wow-delay="0.7s" src="/images/backgrounds/404.jpg" alt="404" />
                        <h2 className="s-lineDownCenter wow zoomInUp" data-wow-delay="0.7s">page not found</h2>
                        <p className="wow zoomInUp" data-wow-delay="0.7s">Le pages que vous voyer n' est pas valide pour le moment valider une autre URL ou clicker içi <a href="/">ACCUEIL</a> .</p>
                        <h3 className="s-title wow zoomInUp" data-wow-delay="0.7s">GP LOCATION VOUS REMERCI</h3>
                       
                    </div>
                    <img alt="audi" src="/images/backgrounds/404Bg.jpg" className="img-responsive center-block b-error-img" />
                </section>
            </div>
        )
    }
}

export default NotFound
