import React from 'react'
import './Devis.css'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      
      color:'#888',
      position: 'relative',
      borderBottom: '1px solid #ced4da',
      fontSize: 16,
      transition: theme.transitions.create([ 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      
    },
  }))(InputBase);
const useStyles = makeStyles((theme) => ({
  
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Info() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
        <div>
        <div className='row ml-auto'>
                <div className='container-devi ml-auto  p-5'>
                    <div className=' row'>
                        <div className='col-12 '> <h1 className="col-12 titre--perso  d-flex justify-content-center"> INFO SUR LE CONTRAT</h1> 
                        </div>
                    </div >

                    <div className=' row'>
                        
                        <FormControl  className={classes.formControl}>
                                <InputLabel id="" className='place--perso'>Status</InputLabel>
                                <NativeSelect
                                    id="demo-customized-select-native"
                                    value={age}
                                    onChange={handleChange}
                                    input={<BootstrapInput />}
                                    >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </NativeSelect>
                        </FormControl>
                        
                    </div>
                    <div className='row'>
                    <FormControl className={classes.formControl}>
                        <InputLabel className='place--perso' htmlFor="">Forfait loc personaliser</InputLabel>
                        <BootstrapInput id="" />
                    </FormControl>
                    </div>
                    <div className='row'>
                    <FormControl className={classes.formControl}>
                        <InputLabel className='place--perso' htmlFor="">Acompte</InputLabel>
                        <BootstrapInput id="" />
                    </FormControl>
                    </div>
                    <div className='row'>
                    <FormControl className={classes.formControl}>
                        <InputLabel className='place--perso' htmlFor="">Num de vol info supp  </InputLabel>
                        <BootstrapInput id="" />
                    </FormControl>
                    </div>
                    <div className='row'>
                    <FormControl className={classes.formControl}>
                        <InputLabel className='place--perso' htmlFor="">Livraison Personnaliser</InputLabel>
                        <BootstrapInput id="" />
                    </FormControl>
                    </div>
                    <div className='row'>
                    <FormControl className={classes.formControl}>
                        <InputLabel className='place--perso' htmlFor="">Retour personaliser</InputLabel>
                        <BootstrapInput id="" />
                    </FormControl>
                    </div>
                </div>


                <div className='container-devi mr-auto p-5'>
                    <div className=' row'>
                            <div className='col-12 '> <h1 className="col-12 titre--perso  d-flex justify-content-center"> INFO SUR LE CLIENT</h1> 
                            </div>
                    </div >
                    
                    <div className='row'>
                    <FormControl className={classes.formControl}>
                    <InputLabel className='place--perso' htmlFor="">Nom</InputLabel>
                        <BootstrapInput id="" />
                    </FormControl>
                    </div>
                    <div className='row'>
                    <FormControl className={classes.formControl}>
                        <InputLabel className='place--perso' htmlFor="">Prenom</InputLabel>
                        <BootstrapInput id="" />
                    </FormControl>
                    </div>
                    <div className='row'>
                    <FormControl className={classes.formControl}>
                        <InputLabel className='place--perso' htmlFor="">Telephone  </InputLabel>
                        <BootstrapInput id="" />
                    </FormControl>
                    </div>
                    <div className='row'>
                    <FormControl className={classes.formControl}>
                        <InputLabel className='place--perso' htmlFor="">Email</InputLabel>
                        <BootstrapInput id="" />
                    </FormControl>
                    </div>
                    <div className='mt-5 row mr-auto'>
                    <FormControl className={classes.formControl}>
                    <Button className=' mr-auto' variant="contained" color="primary">
                        Cree le contrat
                    </Button>
                    </FormControl>
                    </div>
                </div>
            </div>
        </div>
    )
}
