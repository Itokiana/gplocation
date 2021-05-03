 
import React, { useState, useEffect } from 'react'

function OptionReserver(props) {
    const [prix, setprix] = useState('0')
    const [OptionPrix, setOptionPrix] = useState()
    useEffect(() => {
            setOptionPrix(props.lol)
        }, []
    );
    function change(event) {
        const value = event.target.value
        setprix(value)
        
       
    }
    
    
    
    return (
        <>  
            <div className="col-lg-6 col-sm-6 col-xs-12">
                <h4 className="titre-7">Choisissez vos options :</h4>
                <div>
                    <input  name="" type="checkbox" defaultValue="" />
                    <span className="Annulation">Annulation Covid (voir détails) : </span>
                    <span className="cout">10.00 €</span>
                </div>       
                <div className="contenue-1">
            
                    <select  name="conducteur" type="checkbox" tabIndex="-1" id ='b' >
                    {/* onChange={ e => change(e) } value={prix} */}
                        <option value='zero'>0</option>
                        <option value='un'>1</option>
                        <option value='deux'>2</option>
                        <option value='trois'>3</option>
                    </select>
                
                    <span className="conducteur">Conducteur additionnel  :</span>
                    <span className="gratuit">Gratuit</span>
                
                    <div className="ddOutOfVision" id="2-produit_61_msddHolder" >

                        <select  name="bebe" type="checkbox" tabIndex="-1" id='a'  >
                            <option value='zero'>0</option>
                            <option value='un'>1</option>
                            <option value='deux'>2</option>
                            <option value='trois'>3</option>
                        </select>

                        <span className="Annulation">Siège bébé (de 0 à 3 ans)  : </span>
                        <span className="cout-1">9.00 €</span>
                    </div>
                    <div className="ddOutOfVision" id="3-produit_61_msddHolder" >
                        <select  name="" type="checkbox" tabIndex="-1" id='c'>
                            <option value='zero'>0</option>
                            <option value='un'>1</option>
                            <option value='deux'>2</option>
                            <option value='trois'>3</option>
                        </select>
                        <span className="Annulation"> Réhausseur (à partir de 3 ans) : </span>
                        <span className="cout-2">9.00 €</span>
                    </div>
                    <input className="produit_opt optf#REF" id="4-produit_61" name="" type="checkbox" value="" />
                    <span className="Annulation">GPS : </span>
                    <span className="optionresult">27.00 €</span>
                </div>
            </div>

            <div className="col-lg-6 col-sm-6 col-xs-12">
                <div className="avantage">
                    <ul className="option ">
                        <li className="liste">
                            <svg width="2em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle-fill" fill="#228dcb " xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
                            </svg>
                            <span className="Prise">Prise en charge à l'aéroport</span>
                        </li>
                        <li className="liste">
                            <svg width="2em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle-fill" fill="#228dcb " xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
                            </svg>
                            <span className="option">Kilométrage illimité</span>
                        </li>
                        <li className="liste">
                            <svg width="2em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle-fill" fill="#228dcb " xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
                            </svg>
                            <span className="option">Assurance tous risques avec franchise</span>
                        </li>
                        <li className="liste">
                            <svg width="2em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle-fill" fill="#228dcb " xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
                            </svg>
                            <span className="option"> Carburant : plein à rendre plein</span>
                        </li>
                    </ul>
                </div>
            </div>
        </> 
    );
}
export default OptionReserver;