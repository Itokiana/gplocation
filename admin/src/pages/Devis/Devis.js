import React , { useState } from 'react'
import {useFormik} from 'formik'
import './Devis.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Info from './Info'
const useStyles = makeStyles((theme) => ({

  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
export default function Devis() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
   const classes = useStyles();
   const formik = useFormik({})
	
    return (
        <div>
          <div className='container-devi p-5'>
              <div className='row '> <h1 className="col-12 titre--perso  d-flex justify-content-center"> CREATION D'UN CONTRAT</h1> </div>
              <div className='row'>
                  <div className='col-md-4  d-flex align-items-center '>
                       <div className='row col-12 d-flex justify-content-center w-100 h-100 '><img className=' mt-2 w-100 h-100 image--perso' src='https://imgur.com/fXq0EOL.png' alt='voiture'/></div> 
                        <br/>
                   </div>
                  <div className='col-md-8 ml-auto container--form'>
                       <form id='my-form'>

                            <div className='mb-5'>
                                <div className='row'>
                                        <label className='col-3 ml-auto' htmlFor='dateDepart'>date de depart</label> 
                                        <label className='col-4 ml-auto' htmlFor='lieuDepart'>Lieu de depart</label>
                                        <label className='col-3 ml-auto' htmlFor='timeDepart'>heure de depart</label>

                                </div>
                                <div className='row'>
                                        <input className='col-3 ml-auto input--perso' type="date" name="dateDepart" id="dateDepart"/>
                                        <select className='col-5 ml-auto input--perso' type="text" name="lieuDepart" id="lieuDepart">
                                            <option value= 'Aéroport Roland-Garros'> Aéroport Roland-Garros </option>
                                            <option value= 'Sainte-Marie'> Sainte-Marie</option>
                                        </select>
                                        <input className='col-3 input--perso lera ml-auto' type="time" name="timeDepart" id="timeDepart"/>
                                    
                                </div>
                            </div>

                            <div>
                            <div className='row'>
                                        <label className='col-3 ml-auto' htmlFor='dateDepart'>date de depart</label> 
                                        <label className='col-4 ml-auto' htmlFor='lieuDepart'>Lieu de depart</label>
                                        <label className='col-3 ml-auto' htmlFor='timeDepart'>heure de depart</label>

                                </div>
                                <div className='row'>
                                        <input className='col-3 ml-auto input--perso' type="date" name="dateDepart" id="dateDepart"/>
                                        <select className='col-5 ml-auto input--perso' type="text" name="lieuDepart" id="lieuDepart">
                                            <option value= 'Aéroport Roland-Garros'> Aéroport Roland-Garros </option>
                                            <option value= 'Sainte-Marie'> Sainte-Marie</option>
                                        </select>
                                        <input className='col-3 input--perso lera ml-auto' type="time" name="timeDepart" id="timeDepart"/>
                                    
                                </div>
                                
                            </div>
                            
                       </form>
                  </div>
              </div>

             <div className='row'>
                    <div className= ' p-1 col-4 d-flex bd-highlight mt-5 d-flex justify-content-center nextPrev'>
                        <i class="fa fa-chevron-left  d-flex align-items-center" aria-hidden="true"></i>
                            <span className='mr-5 ml-5'>CATEGORIE A</span>
                            <i class="fa fa-chevron-right  d-flex align-items-center" aria-hidden="true"></i>
                    </div>  
                    <div className='p-1 col-8 d-flex bd-highlight mt-5 d-flex flex-row-reverse nextPrev'>
                       
                            <Button className=' w-25 justify-content-center nextPrev' form="my-form" variant="contained" color="primary">
                                Valider
                            </Button>
                        
                    </div>  
             </div>

          </div>
          {/* Handle change  */}
          <div className='container--mini col-4'> STOCK DISPONIBLE : 4</div>
          <div className='container-devi'>
                <div className='row'>
                    <div className='container-devi2 col-4 mr-auto d-flex justify-content-center text--perso '> 9 jour(s)</div>
                    <div className='container-devi2 col-4 mr-auto d-flex justify-content-center text--perso'> Forfait location</div>
                    <div className='container-devi2 col-4 mr-auto d-flex justify-content-center text--perso text-success'> 250.00 €</div>
                </div>
                <div className='row'>
                    <label for='conducteur' className='container-devi3  col-8 mr-auto d-flex justify-content-center '>Conducteur additionnel</label>
                    <select id='conducteur' name='conducteur' className=' aloka container-devi3  col-1 mr-auto h-25 d-flex justify-content-center'>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <label className='container-devi3  col-2  d-flex justify-content-center text-success '>gratuit</label>
                </div>
                <div className='row'>
                    <label for='baby' className='container-devi3  col-8 mr-auto d-flex justify-content-center '>Siège bébé (de 0 à 3 ans)  </label>
                    <select id='baby' name='baby' className=' aloka container-devi3  col-1 mr-auto h-25 d-flex justify-content-center'>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <label className='container-devi3  col-2  d-flex justify-content-center text-success '>9 €</label>
                </div>
                <div className='row'>
                    <label for='autre' className='container-devi3  col-8 mr-auto d-flex justify-content-center '>Réhausseur (à partir de 3 ans)</label>
                    <select id='autre' name='autre' className=' aloka container-devi3  col-1 mr-auto h-25 d-flex justify-content-center'>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <label className='container-devi3  col-2  d-flex justify-content-center text-success '>9 €</label>
                </div>
                <div className='row'>
                    <label for='gps' className='container-devi3  col-8 mr-auto d-flex justify-content-center '>GPS</label>
                    <Checkbox name='gps'className=' col-1 mt-4 mr-auto d-flex justify-content-center align-items-center 'defaultChecked color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    <label className='container-devi3  col-2  d-flex justify-content-center text-success '>27 €</label>
                </div>
                <div className='row'>
                    <label for='gps' className='container-devi3  col-8 mr-auto d-flex justify-content-center '>Annulation  covid</label>
                    <Checkbox name='gps'className=' col-1 mt-4 mr-auto d-flex justify-content-center align-items-center 'defaultChecked color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    <label className='container-devi3  col-2  d-flex justify-content-center text-success '>10 €</label>
                </div>
                
          </div>
          <Info></Info>
        </div>
    )
}
