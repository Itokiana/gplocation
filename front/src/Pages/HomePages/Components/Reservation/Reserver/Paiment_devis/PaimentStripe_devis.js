
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Checkout from './Checkout'
export default function Stripe(props) {
    const [data, setdata] = useState()

    useEffect(async () => {

        await axios.get(`/reservations/${props.match.params.id}`).then(response => {
            //   console.log('props list info',response.data)
            setdata(response.data)
        });
    }, []);
    console.log('devi', data)

    return (
        <div>
            <h1>Paiment devis</h1>
            <Checkout data={data}/>
        </div>
    )
}
