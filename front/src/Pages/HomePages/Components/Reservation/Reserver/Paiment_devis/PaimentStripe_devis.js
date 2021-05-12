
import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Checkout from './Checkout'
import moment from 'moment'
import './expire.css'
import image from '../../../../../../img/expire.svg'

function expire() {
    return (
        <div className="felicitation">
			<div className="container cont_fel">
				<div className="row logo">
					<h2 >Date Expirer</h2>
					<img className='image_svg' src={image} />
				</div>
						
				<div className="text_fel">
					<h5>Une erreur est survenue lors du paiement de votre réservation !<br/>
                    
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
        // <div class="expire">
        //     <div className='expire1'>
        //         <h1> Votre devi est expirer </h1>

        //     </div>

        // </div>
    )
}
export default function Stripe(props) {
    const [data, setdata] = useState()

    useEffect(async () => {

        await axios.get(`/reservations/${props.match.params.id}`).then(response => {
            setdata(response.data)
        });
    }, []);
    console.log(data)
    // console.log(data && (moment(data.reservation.envoi).format('L') < moment().add(data.reservation.valide, 'd').format('L') ) ? "ok": 'nonnono') 

    console.log(data && (moment(data.reservation.envoi).add((data.reservation.valide), 'd').format('L') <= moment().format('L')) ? "ok" : 'nonnono')

    return (
        <div>
            {
                data ? (moment(data.reservation.envoi).add(data.reservation.valide, 'd').format('L') <= moment().format('L')
                    ? <Checkout data={data} prix={props.match.params.prix} /> : expire())
                    : <h1>Chargement.....</h1>
            }
        </div>
    )
}
