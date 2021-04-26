import React, {useEffect, useState} from 'react'
import './Dashdord.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import axios from 'axios'
import ChiffreAffaire from './ChiffreAffaire';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function format(time) {   
  // Hours, minutes and seconds
  var hrs = ~~(time / 3600);
  var mins = ~~((time % 3600) / 60);
  var secs = ~~time % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = "";
  if (hrs > 0) {
      ret += "" + hrs + "h" + " " + (mins < 10 ? "0" : "");
  }
  ret +=  "" + mins + "m" + " " + (secs < 10 ? "0" : "");
  ret += "" + secs + "s";
  return ret;
}

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
  const [data , setData] = useState()

  useEffect(() => {
    axios.post('/analitique').then(response=>{
        setData(response.data)
    })

      data? console.log(data.data) : console.log('not yet');
  }, [])
  return (
    <div>
     <ChiffreAffaire/>
     <div className='row onglet pr-5 mt-5  d-flex align-items-center'> <Button href="/devis" className="m-2 ml-auto"variant="outlined" color="secondary">
     crée un contrat de location 
      </Button></div>
     
       {data?
       <> 
       <div className='row m-10  d-flex justify-content-center align-items-center'><h1 className='ganal'>présentation de google analytics</h1> </div>
       <div className='row'>
       <Onglet nom='session' chiffre={data.data[4].value} evolution={parseInt(data.data[1].value) + '%'}/>
       <Onglet nom='page visiter' chiffre={data.data[6].value} evolution='10%'/>
       <Onglet nom='utilisateur' chiffre={data.data[3].value}  evolution={parseInt(data.data[1].value) + '%'}/>
       <Onglet nom='duree moyen' chiffre={format(parseInt(data.data[8].value))} evolution='60%'/>
       <Onglet nom='visiteur' chiffre={data.data[4].value} evolution={parseInt(data.data[9].value) + '%'}/>
       <Onglet nom='taux de rebond' chiffre={parseInt(data.data[5].value) + '%'} evolution='--'/>
       </div>
       </>
      :null
      }
       
     
     
    <div className="row container circle_diagram">
      <div className=" col-md-6" role="main">
        </div> 
        
  
    </div>
    
    </div>
  )
}











