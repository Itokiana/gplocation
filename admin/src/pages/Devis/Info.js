import React from 'react'
// import { useFormik } from 'formik'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

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

        color: '#888',
        position: 'relative',
        borderBottom: '1px solid #ced4da',
        fontSize: 16,
        transition: theme.transitions.create(['box-shadow']),
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

const schema = yup.object().shape({
    forfait: yup.string().required('Champ obligatoire'),
    value: yup.string().required('Champ obligatoire'),
    accompte: yup.string().required('Champ obligatoire'),
    email:yup.string().required('Champ obligatoire'),
    prenom:yup.string().required('Champ obligatoire'),
    nom:yup.string().required('Champ obligatoire'),
    livraison:yup.string().required('Champ obligatoire'),
    vol:yup.string().required('Champ obligatoire')

    
    
  })

export default function Info(props) {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const onSubmit = (data) => {
        console.log('allala',data)
      };
      const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
    // console.log('propsssss', props)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row d-flex justify-content-center'>

                    <div className='container-devi p-5 col-4'>
                        <div className=' row'>
                            <div className='col-12 '> <h1 className="col-12 info--perso  text-center d-flex justify-content-center"> INFORMATION SUR LE CONTRAT</h1>
                            </div>
                        </div >

                        <div className=' row'>

                            <FormControl className={classes.formControl}>
                                <InputLabel id="" className='place--perso'>Status</InputLabel>
                                <NativeSelect
                                    id="demo-customized-select-native"
                                    value={age}
                                    onChange={handleChange}
                                    input={<BootstrapInput {...register("value")}/>}
                                    
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
                                <InputLabel className='place--perso'  htmlFor="">Forfait loc personaliser</InputLabel>
                                <BootstrapInput id="" {...register("forfait")} />
                            </FormControl>
                            <p className='text-danger ml-5'>{errors.forfait?.message}</p>
                        </div>
                        <div className='row'>
                            <FormControl className={classes.formControl}>
                                <InputLabel className='place--perso' htmlFor="">Acompte</InputLabel>
                                <BootstrapInput id="" {...register("accompte")} />
                            </FormControl>
                        </div>
                        <div className='row'>
                            <FormControl className={classes.formControl}>
                                <InputLabel className='place--perso' htmlFor="">Num de vol info supp  </InputLabel>
                                <BootstrapInput id="" {...register("vol")} />
                            </FormControl>
                        </div>
                        <div className='row'>
                            <FormControl className={classes.formControl}>
                                <InputLabel className='place--perso' htmlFor="">Livraison Personnaliser</InputLabel>
                                <BootstrapInput id="" {...register("livraison")} />
                            </FormControl>
                        </div>
                        <div className='row'>
                            <FormControl className={classes.formControl}>
                                <InputLabel className='place--perso' htmlFor="">Retour personaliser</InputLabel>
                                <BootstrapInput id="" {...register("retour")} />
                            </FormControl>
                        </div>
                    </div>


                    <div className='container-devi p-5 col-4  '>
                        <div className=' row mb-5'>
                            <div className='col-12 '> <h1 className="col-12 info--perso text-center d-flex justify-content-center"> INFORMATION SUR LE CLIENT</h1>
                            </div>
                        </div >

                        <div className='row'>
                            <FormControl className={classes.formControl}>
                                <InputLabel className='place--perso' htmlFor="">Nom</InputLabel>
                                <BootstrapInput id="" {...register("nom")} />
                            </FormControl>
                        </div>
                        <div className='row'>
                            <FormControl className={classes.formControl}>
                                <InputLabel className='place--perso' htmlFor="">Prenom</InputLabel>
                                <BootstrapInput id="" {...register("Prenom")}/>
                            </FormControl>
                        </div>
                        <div className='row'>
                            <FormControl className={classes.formControl}>
                                <InputLabel className='place--perso' htmlFor="">Telephone  </InputLabel>
                                <BootstrapInput id="" {...register("telephone")} />
                            </FormControl>
                        </div>
                        <div className='row'>
                            <FormControl className={classes.formControl}>
                                <InputLabel className='place--perso' htmlFor="">Email</InputLabel>
                                <BootstrapInput id="" {...register("email")}/>
                            </FormControl>
                        </div>

                    </div>
                </div>
                <div className='mb-5 row d-flex justify-content-center'>
                    <FormControl className={classes.formControl}>
                        <Button className=' mr-auto button--perso' variant="contained" type='submit' color="primary">
                            Cree le contrat
                            </Button>
                    </FormControl>
                </div>
            </form>
        </div>
    )
}
