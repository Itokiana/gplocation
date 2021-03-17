import React from 'react'
import './fel_css.css'
import {Link} from 'react-router-dom'
import image from '../../../../img/error_reserv.svg'
export default function Felicitation() {
	return (
		<div className="felicitation">
			<div className="container cont_fel">
				<div className="row logo">
					<h2>Paiment refuser</h2>
					<img className='image_svg' src={image} />
				</div>
						
				<div className="text_fel">
					<h5>Une erreur est survenue lors du paiement de votre réservation !<br/>
                    Peut-être avez-vous fait une erreur lors de la saisie de votre carte bancaire ?<br/>    
                    Si ce n'est pas le cas, nous vous conseillons de contacter votre banque le plus rapidement possible afin de vous garantir la disponibilité du véhicule.
					</h5>
					<h3 className= 'name_client'>
                    Comment faire ?
					</h3>
					<br/>
				
					<h6 className='footer_fel'>L'équipe Atlantis Location vous invite a rééssayer tout de suite et en moins de 2 minutes votre réservation en rejoignant
                    <Link to="/"> l'accueil</Link> </h6>
                    
				</div>

			</div>
		</div>
	)
}
