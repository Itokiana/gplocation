import React from 'react'
import {Link} from 'react-router-dom'
import './fel_css.css'
import image from '../../../../img/felicitation.svg'
export default function Felicitation() {
	return (
		<div className="felicitation">
			<div className="container cont_fel">
				<div className="row logo">
					<h1>Felicitation</h1>
					<img className='image_svg' src={image} />
				</div>
						
				<div className="text_fel">
					<h5>Votre reservation est effectuer avec success veiller verifier votre boite email pour avoir les 
						detail de votre reservation sous le nom de :
					</h5>
					<h2 className= 'name_client'>
						{(sessionStorage.getItem('nom')).toUpperCase() +(" ") + (sessionStorage.getItem('prenom')).toLowerCase()}
					</h2>
					<br/>
					<br/>
					<br/>
					<h6 className='footer_fel'>L'equipe de Gplocation vous remercie
					</h6>
					<Link to="/"> Accueil</Link> 
					
				</div>

			</div>
		</div>
	)
}
