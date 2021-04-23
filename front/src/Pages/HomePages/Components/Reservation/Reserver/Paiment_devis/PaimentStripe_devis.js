
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Checkout from './Checkout'
export default function Stripe(props) {
    const [data, setdata] = useState()

    useEffect(async () => {

        await axios.get(`/reservations/${props.match.params.id}`).then(response => {
            setdata(response.data)
        });
    }, []);

    return (
        <div>
            {data ? <Checkout data={data} prix={props.match.params.prix} /> : <h1>Chargement.....</h1>}
        </div>
    )
}
