import React from 'react'
import Image from '../../img/Serenitrip.png'
export default function Bandeau() {
    
    return (
        
        <div className='bandeau'>
            <a href='https://www.serenitrip.fr' target="_blank">
              <img className="img-responsive center-block image_serenity" src={Image}/>
           </a>
        </div>
    )
}
