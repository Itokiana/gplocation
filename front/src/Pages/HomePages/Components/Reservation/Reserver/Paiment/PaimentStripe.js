import React from 'react'
import Checkout from './Checkout'
export default function Stripe(props) {
    
    return (
        <div>
            <Checkout data={props.location.state.id} />
        </div>
    )
}
