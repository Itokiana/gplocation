import React, { useState, useEffect } from 'react'
import { TiDeleteOutline } from 'react-icons/ti';
import { useFormik } from 'formik'
import { set, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios'
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
        color: 'white',
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
    email: yup.string().email("Please enter valid email").required('Champ obligatoire'),
    forfait: yup.string().required('Champ obligatoire'),
    value: yup.string().required('Champ obligatoire'),
    accompte: yup.string().required('Champ obligatoire'),
    prenom: yup.string().required('Champ obligatoire'),
    nom: yup.string().required('Champ obligatoire'),
    telephone: yup.string().required('Champ obligatoire')
})

export default function Info(props) {
    const classes = useStyles();
    const [status, setStatus] = useState('');
    const [client, setClient] = useState()
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [affiche, setAffiche] = useState(false)
    const [existclient, setExistclient] = useState(null)
    const [idclient_back, setidclientback] = useState(null)
    
    useEffect(() => {
        axios.get('/clients').then(res => {
            // setClient(res.data)
            if (res.status === 200) {
                // console.log('client', res.data)
                setClient(res.data)
            }
        });
        // console.log('Client',client)
        const results = client ? client.filter(person =>
            person.nom.toLowerCase().search(searchTerm.toLowerCase()) !== -1
            // person.nom.toLowerCase().includes(searchTerm)
        ) : null;
        setSearchResults(results);
    }, [searchTerm]);

    const annuler_list = () => {
        setAffiche(false)
        setExistclient(null)
    }

    const change_valeur_entre = e => {
        // console.log('change',e.target.value)
        setSearchTerm(e.target.value);
        // setnomclient(e.target.value)
        // console.log(affiche)
    };
    const change_select = (event) => {
        setStatus(event.target.value);

    };
    const select_client_exist = (idC) => {
        setAffiche(false)
        setExistclient(idC)

    }


    const formik = useFormik({
        initialValues: {
            nom: '',
            telephone: '',
            email: '',
            prenom: '',
            forfait: '',
            accompte: '',
            status: '',
            vol: ''
        },

        // validationSchema: schema,

        onSubmit: async (values, {resetForm}) => {
            if (props.valide === true) {
                let date_devis = props.reservation.datedevis
                let id_voiture = props.reservation.voiture
                let signe = props.reservation.signe
                console.log('data', date_devis)
                // console.log('datedevis', date_devis)
                // console.log('idvoitur', id_voiture)

                const clientId = async () => {
                    if (existclient) {
                        return existclient.id
                    } else {
                        let value = {}
                        let varId = ''

                        value['nom'] = values.nom
                        value['prenom'] = values.prenom
                        value['telephone'] = values.telephone
                        value['email'] = values.email


                        
                        
                        await axios.post('/info',value).then(reponse => {
                            if (reponse.status === 200){
                                // console.log('idClientGet',reponse.data.id.id)
                               
                            }
                            varId = reponse.data.id.id
                        })
                        
                        return varId
                    }
                    
                }

                let value_back = {
                    date_depart: date_devis.dateDepart,
                    date_retour: date_devis.dateRetour,
                    heure_depart:date_devis.timeDepart,
                    heure_retour: date_devis.timeRetour,
                    lieu_depart: date_devis.lieuDepart,
                    lieu_retour: date_devis.lieuRetour,
                    voiture_id:id_voiture,
                    prix: values.forfait,
                    client_id: await clientId(),
                    numero_vol:values.vol,
                    acompte:values.accompte,
                    signe:signe,
                    status:values.statu

                  }
                // console.log('value_back',value_back)
                await axios.post('/reservations',value_back).then(result => {
                    if(result.status===201){
                        console.log('ok')
                    //   history.push('/felicitation')
                    //   window.location.reload()
                    }
                  })

            }

            setExistclient(null)
            resetForm()
            
            
        }
    })

    if (existclient) {
        formik.values.nom = existclient.nom
        formik.values.prenom = existclient.prenom
        formik.values.telephone = existclient.telephone
        formik.values.email = existclient.email
    }
    
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='row d-flex justify-content-center'>
                    {affiche === true ? (
                        <div className='container-devi p-5 col-4'>
                            <TiDeleteOutline className='quitter h1' onClick={annuler_list} />
                            <p>Suggestion client</p>
                            <ul className="h1 text-white">

                                {searchResults && searchResults.map((name) => {
                                    return <li onClick={() => select_client_exist(name)}>{name.nom}</li>
                                })}
                            </ul>

                        </div>) :
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
                                        onChange={formik.handleChange} value={formik.values.statu}
                                        input={<BootstrapInput name='statu' />}
                                    >
                                        <option aria-label="None" className='bg-dark' value="" />
                                        <option className='bg-dark' value='Paye'>Paye</option>
                                        <option className='bg-dark' value='Paiment partiel'>Paiment Partiel</option>
                                        <option className='bg-dark' value='Devis'>Devis</option>
                                    </NativeSelect>
                                </FormControl>


                            </div>
                            <div className='row'>
                                <FormControl className={classes.formControl}>
                                    <InputLabel className='place--perso' htmlFor="">Forfait loc personaliser</InputLabel>
                                    <BootstrapInput onChange={formik.handleChange} value={formik.values.forfait} type="number" name="forfait" />
                                </FormControl>

                            </div>
                            <div className='row'>
                                <FormControl className={classes.formControl}>
                                    <InputLabel className='place--perso' htmlFor="">Acompte</InputLabel>
                                    <BootstrapInput onChange={formik.handleChange} value={formik.values.accompte} type="number" name='accompte' />
                                </FormControl>

                            </div>
                            <div className='row'>
                                <FormControl className={classes.formControl}>
                                    <InputLabel className='place--perso' htmlFor="">Num de vol info supp  </InputLabel>
                                    <BootstrapInput id="" onChange={formik.handleChange} value={formik.values.vol} name="vol" />
                                </FormControl>
                                {/* <p className='text-danger ml-5'>{errors.vol?.message}</p> */}
                            </div>

                        </div>

                    }


                    <div className='container-devi p-5 col-4  '>
                        <div className=' row mb-5'>
                            <div className='col-12 '> <h1 className="col-12 info--perso text-center d-flex justify-content-center"> INFORMATION SUR LE CLIENT</h1>
                            </div>
                        </div >

                        <div className='row'>

                            <FormControl className={classes.formControl} onChange={change_valeur_entre} onFocus={() => setAffiche(true)}>
                                <InputLabel className='place--perso' htmlFor="">Nom</InputLabel>
                                <BootstrapInput id="" name="nom" onChange={formik.handleChange} value={formik.values.nom} />
                            </FormControl>

                        </div>

                        <div className='row'>
                            <FormControl className={classes.formControl}  >
                                <InputLabel className='place--perso' htmlFor="">Prenom</InputLabel>
                                <BootstrapInput id="" name="prenom" onChange={formik.handleChange} value={formik.values.prenom} />
                            </FormControl>

                        </div>
                        <div className='row'>
                            <FormControl className={classes.formControl}>
                                <InputLabel className='place--perso' htmlFor="">Telephone  </InputLabel>
                                <BootstrapInput name="telephone" onChange={formik.handleChange} value={formik.values.telephone} />
                            </FormControl>

                        </div>
                        <div className='row'>
                            <FormControl className={classes.formControl}>
                                <InputLabel className='place--perso' htmlFor="">Email</InputLabel>
                                <BootstrapInput id="" name="email" onChange={formik.handleChange} value={formik.values.email} />
                            </FormControl>

                        </div>

                    </div>

                </div>


                <div className='mb-5 row d-flex justify-content-center'>
                    <FormControl className={classes.formControl}>
                        <Button className=' mr-auto button--perso' variant="contained" type='submit' color="primary">
                            Crees le contrat
                            </Button>
                    </FormControl>
                </div>
            </form>

        </div>
    )

}
