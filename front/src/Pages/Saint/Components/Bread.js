import React, { Component } from 'react';

 class Bread extends Component {
    render() {
        return (
            <div>
            <fieldset >
                <div className="item">
                    <center><img src="media/about/image00.jpg" alt="sliderImg" width = "1200" height = "500"/></center>
                    
                </div>
            </fieldset>
            <section className="b-best">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-xs-12">
                            <div className="b-best__info text-justify">
                                <header className="s-lineDownLeft b-best__info-head">
                                    <h2 className="wow zoomInUp" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "zoomInUp"}}>Votre voiture de location à Sainte-Marie !</h2>
                                </header>
                                <p>Nous sommes situés à cinq minutes de l'aéroport, nous pouvons vous livrer votre voiture de location là-bas ou bien sur la commune de Sainte-Marie directement.&nbsp;
                                <strong>Que ce soit à l'office du tourisme ou au port de plaisance, précisez-nous simplement l'adresse où vous souhaitez retirer votre véhicule.</strong>&nbsp;
                                Notre agence de location de voiture étant <strong>ouverte sept jours sur sept, y compris les jours fériés</strong>, vous trouverez tous les jours de quoi vous déplacer facilement. Nous possédons un large choix de véhicules récents et neufs.
                                Que vous veniez en famille, seul ou en groupe, nous sommes à votre disposition pour vous guider dans le choix d'une voiture adaptée à vos besoins. Notre assistance joignable en permanence, ainsi que nos assurances incluses, vous permettront de profiter idéalement de votre séjour sur l’île de la Réunion. Avec votre voiture de location, vous bénéficierez d'un totale liberté de déplacement et pourrez ainsi découvrir toutes les richesses de l’île.</p>
                                
                                
                                <a href="/" className="btn m-btn m-readMore wow zoomInUp" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "zoomInUp"}} >liste des voitures<span className="fa fa-angle-right"></span></a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>		
            </div>      
        )
    }
}
export default Bread;