import React from 'react'
import Checkout from './Checkout'
export default function Stripe(props) {
    console.log('grrbrrhbrhr',props)
    return (
        <div>
            <Checkout data={props.location.state} />
        </div>
    )
}
