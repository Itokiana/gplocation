import React from 'react'
import Checkout from './Checkout'
export default function Stripe(props) {
    console.log('tout les donne',props.location.state.id)
    return (
        <div>
            <Checkout data={props.location.state.id} />
        </div>
    )
}
