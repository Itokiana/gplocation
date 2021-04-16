import React from 'react'
import './Devis.css'


function Contain(props) {
    return (
        <div className='text-secondary mt-3 mb-3'>
            <div className='row '>
                <div className='col-6 d-flex align-items-center justify-content-center '>
                    {props.option}
                </div>

                <div className='col-6 d-flex align-items-center justify-content-center border--perso2'>
                    {props.value}
                </div>
            </div> 
            <hr/>
        </div>
    )
}


export default function Info2() {
    const dataInfo = (option, info)=>{
        return { option,info}
    }

    const ligne1 = [
        dataInfo()
    ]
    return (
        <div>
             <div className='row mb-5 d-flex align-items-center justify-content-center '>
            <div className='col-md-5 '>
                <fieldset className=' container-devi2 text-light rounded bg-white mod--perso'>
                    <legend className='d-flex align-items-center justify-content-center head--perso pl-5 pr-5 text-center w-50 rounded titre--perso2'>Information sur le client</legend>
                    <Contain option='name' value='jules'></Contain>
                    <Contain option='Penom' value='jules'></Contain>
                    <Contain option='Adresse' value='jules'></Contain>
                    <Contain option='Adresse suite' value='jules'></Contain>
                    <Contain option='Ville' value='jules'></Contain>
                    <Contain option='Code postal' value='jules'></Contain>
                    <Contain option='Pays' value='jules'></Contain>
                    <Contain option='Telephone' value='jules'></Contain>
                    <Contain option='Email' value='jules'></Contain>
                    <Contain option='Adresse sur place' value='jules'></Contain>
                </fieldset>
            </div>
            <div className='col-md-5 ' >
                <fieldset className=' container-devi2 text-light rounded bg-white mod--perso'>
                    <legend className='d-flex align-items-center justify-content-center head--perso pl-5 pr-5 text-center w-50 rounded titre--perso2'>Information sur le contrat </legend>
                    <Contain option='Nombre de personne' value='jules'></Contain>
                    <Contain option='Num permis' value='jules'></Contain>
                    <Contain option='Lieu permis' value='jules'></Contain>
                    <Contain option='Datepermis' value='jules'></Contain>
                    <Contain option='Date naissance' value='jules'></Contain>
                    <Contain option='Lieux de nissance' value='jules'></Contain>
                    <Contain option='Model de vehicule' value='jules'></Contain>
                    <Contain option='Immat' value='jules'></Contain>
                    <Contain option='Franchise' value='jules'></Contain>
                    <Contain option='caution' value='jules'></Contain>
                    <Contain option='Conducteur auditionnel' value='jules'></Contain>
                    <Contain option='Observation' value='jules'></Contain>
                </fieldset>
            </div>
            </div>


            <div className='row mb-5 d-flex align-items-center justify-content-center '>
            <div className=' col-12'>
                <fieldset className=' container-devi text-light rounded'>
                <legend className='d-flex align-items-center justify-content-center head--perso pl-5 pr-5 text-center w-50 rounded titre--perso2'>Information sur le client</legend>
                    
                </fieldset>
            </div>  
            </div>
        </div>
    )
}
