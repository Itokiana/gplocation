import React from 'react'
import './Dashdord.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
//import axios from 'axios'
import ChiffreAffaire from './ChiffreAffaire';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const Onglet = (props)=>
{
  return(
  <div className='col-md-2 mb-4 '>
    <div className="onglet row  ">
      <div className='col-12 d-flex justify-content-center align-items-center onglet_title'>{props.nom}</div>
      <div className='col-12 d-flex justify-content-center align-items-center onglet_chifre'>{props.chiffre}</div>
      <div className='col-12 d-flex justify-content-center align-items-center onglet_monte text-success'><i class="fa fa-long-arrow-up" aria-hidden="true"></i> &nbsp; {props.evolution}</div>
    </div>
    </div>
  )
  
}

export default function Dashbord() {
  const classes = useStyles();
  const now = 60;

  return (
    <div>
     <ChiffreAffaire/>
     <div className='row onglet pr-5 mt-5  d-flex align-items-center'> <Button href="/devis" className="m-2 ml-auto"variant="outlined" color="secondary">
     crée un contrat de location
      </Button></div>
     <div className='row m-10  d-flex justify-content-center align-items-center'><h1 className='ganal'>Présentation de google analytics</h1> </div>
     <div className='row'>
       <Onglet nom='visiteur' chiffre='1000' evolution='60%'/>
       <Onglet nom='page visiter' chiffre='50' evolution='10%'/>
       <Onglet nom='connecter' chiffre='5' evolution='60%'/>
       <Onglet nom='duree moyen' chiffre='3:08:23' evolution='60%'/>
       <Onglet nom='visiteur' chiffre='1000' evolution='60%'/>
       <Onglet nom='visiteur' chiffre='1000' evolution='60%'/>
       
       
     </div>
     
    <div className="row container circle_diagram">
      <div className=" col-md-6" role="main">
        </div> 
        
  
    </div>
    
    </div>
  )
}











