import React, { useState, useEffect } from 'react'
import moment from 'moment'
import axios from 'axios'
import './Devis.css'
function nombredate(depart, retour) {

    let date11 = new Date(depart);
    let date22 = new Date(retour);
    let timeDiff = Math.abs(date22.getTime() - date11.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
    return diffDays ;
  }
export default function Visuel(props) {
    const [data, setdata] = useState()

    useEffect(async () => {

        await axios.get(`/reservations/${props.match.params.id}`).then(response => {
            // console.log('props list info', response.data)
            setdata(response.data)
        });
    }, []);

   console.log('visuel',data)

    return (
        <div>
            {data ? 

            <div className='d-flex align-items-center justify-content-center'>
                <div className='paper--perso'>

                    {/* lohany manomboka eto */}
                    <div className='row lohany '>


                        <div className='col-3'>
                            
                            <img src='https://imgur.com/B1VTlIp.png' className='image--perso2 w-100 h-100' />
                        </div>



                        <div className='ml-auto col-4 d-flex align-items-center justify-content-center'>
                            <lu className=' list-unstyled list--head  '>
                                <li className=''>Date de creation : {moment(data.reservation.created_at).format('LL')}</li>
                                <li className=''>Fin de valiudidte : {moment(data.reservation.created_at).add(data.reservation.valide, 'd').format('LL')}</li>
                                <li className=''>Commande ref: {data.reservation.id}</li>
                            </lu>
                        </div>


                    </div>

                    {/* Vatany 1 no manomboka eto */}

                    <div className='row'>

                        <div className='col-12 m-5'>
                            <h3 className='text-secondary h6'>Cher client</h3>
                            <p> Nous avons le plaisir de vous fraire part de votre devis ref-{data.reservation.id}</p>
                        </div>

                    </div>
                    <hr />

                    {/* Vatany 2 no manomboka eto */}
                    <div className='row'>
                        <div className='col-6   mt-3 mb-3 text-right  '>

                            <div className='h1 paper--text d-flex align-items-center justify-content-center'>
                                Vehicule
                                </div>

                            <div className='d-flex align-items-center justify-content-center'>
                                <lu className=' list-unstyled list--body text-right'>
                                    <li className=''>{data.cat.name} Ou equivalent</li>
                                    <li className=''>Duree:  {nombredate(data.reservation.date_depart,data.reservation.date_retour)} jour</li>
                                    <li className=''>Kilometrage Inclus : illimiter</li>
                                </lu>
                            </div>

                        </div>
                        <div className='col-6 ml-auto mt-3 mb-3 text-center '>
                            <img
                                className='image--perso' src={"http://localhost:4000" + (data.voiture.image.url)} alt='voiture'
                            />
                            {/* <img className='image--perso' src='https://imgur.com/fXq0EOL.png' /> */}
                        </div>

                    </div>
                    <hr />

                    {/* Vatany 3 no manomboka eto */}

                    <div className='row'>
                        <div className='col-6   mt-3 mb-3 text-right  '>

                            <div className='h4 paper--text d-flex align-items-center justify-content-center'>
                                Depart
                                </div>

                            <div className='d-flex align-items-center justify-content-center'>
                                <lu className=' list-unstyled list--body text-right'>
                                    <li className=''>Lieux: {data.reservation.lieu_depart} </li>
                                    <li className=''>Date : {data.reservation.date_depart}</li>
                                </lu>
                            </div>

                        </div>
                        <div className='col-6 ml-auto mt-3 mb-3 text-center border-left '>
                            <div className='h4 paper--text d-flex align-items-center justify-content-center'>
                                Arriver
                                </div>

                            <div className='d-flex align-items-center justify-content-center'>
                                <lu className=' list-unstyled list--body text-left'>
                                    <li className=''>Lieux: {data.reservation.lieu_retour} </li>
                                    <li className=''>Date : {data.reservation.date_retour}</li>
                                </lu>
                            </div>
                        </div>

                    </div>
                    <hr />

                    {/* Vatany 3 no manomboka eto */}
                    <div className='row'>
                        <div className='col-12   mt-3 mb-3 '>

                            <div className='h5 paper--text d-flex align-items-center justify-content-center'>
                                Details
                                </div>

                            <div className='d-flex align-items-center justify-content-center'>
                                <lu className=' list-unstyled list--body text-center'>
                                    <li className=''>Forfait vehicule : {data.reservation.prix} € </li>
                                </lu>
                            </div>

                        </div>
                    </div>
                    <hr />
                    {/* tongony no manomboka eto */}

                    <div className='row tongony '>

                        <div className=' tongony--titra col-12 text-center  h5 paper--text '>
                            Le montant du devis
                                </div>

                        <div className='mr-auto col-6 d-flex align-items-center justify-content-center'>
                            <div className='text--foot'>Montant en TTC :</div>
                        </div>
                        <div className='mr-auto col-6 d-flex align-items-center justify-content-center'>
                            <div className='text--foot'>{data.reservation.prix} € </div>
                        </div>
                    </div>

                    {/* tgn 2 no manomboka eto */}
                    <div className='row'>
                        <div className='col-12   mt-3 mb-3 '>

                            <div className='h5 paper--text d-flex align-items-center justify-content-center'>
                                Valider directement votre devis
                                </div>

                            <div className='d-flex align-items-center justify-content-center'>
                                <lu className=' list-unstyled list--body text-center'>
                                    <a href='#'>  <li className='lien'>  Regler un acompte de 100 € </li></a>
                                    <a href='#'>  <li className='lien'>  Regler le montant total de reservation </li></a>
                                </lu>
                            </div>

                        </div>
                    </div>
                    <hr />

                </div>


            </div>

           : null }
        </div>
    )
}