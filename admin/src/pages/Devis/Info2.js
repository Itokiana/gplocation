import React, { useState, useEffect } from 'react'
import './Devis.css'
import moment from 'moment';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { date } from 'yup';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({

    formControl: {

        background: '#26b99a;',
        margin: theme.spacing(1),
        minWidth: 120,
        borderRadius: 5,

    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function Contain(props) {
    return (
        <div className='text-secondary mt-3 mb-3'>
            <div className='row '>
                <div className='col-6 d-flex align-items-center justify-content-center  '>
                    <strong> {props.option} </strong>
                </div>

                <div className='col-6 d-flex align-items-center justify-content-center border--perso2'>
                    {props.value}
                </div>
            </div>
            <hr />
        </div>
    )
}


export default function Info2(props) {
    const classes = useStyles();
    const [date_envoyer, setdatenvoyer] = useState(null)
    const [client, setClient] = useState(props.client.client)
    const [res, setres] = useState(props.client.reservation)
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    const getdate = async () => {
        let value = {}
        let date = moment();
        value['id'] = res.id
        value['envoi'] = date
        value['si_envoi'] = true
        await axios.post(`/updatereservation`, value).then(rep => {
            console.log('rep.data', rep.data)
        })
        window.location.reload()

    }

    const dataInfo = (option, info) => {
        return { option, info }
    }

    const ligne1 = [
        dataInfo('Penom', client.prenom),
        dataInfo('Nom', client.nom),
        dataInfo('Telephone', client.telephone),
        dataInfo('Email', client.email),
        dataInfo('Adresse sur plac', ''),
        dataInfo('Adresse',),
        dataInfo('Adresse suite', ''),
        dataInfo('Ville', ''),
        dataInfo('Code postal', ''),
        dataInfo('Pays', ''),
    ]
    const ligne2 = [
        dataInfo('Valide Pendant', res.valide),
        dataInfo('Date de creation', moment(res.created_at).format('LLL')),
        dataInfo('Date d’envoie du devis', res.envoi ? moment(res.envoi).format('LLL') : "Devi n'est pas envoyer"),
        dataInfo('Fin de validiter', moment(res.created_at).add(res.valide, 'd').format('LLL')),
        dataInfo('Acompte', res.acompte),
        dataInfo('Total', res.prix),
    ]

    console.log('info2', props)

    return (
        <div>
            <div className='row mb-5 d-flex align-items-center justify-content-center '>
                <div className='col-md-10 '>
                    <fieldset className=' container-devi2 text-light rounded bg-white mod--perso'>
                        <legend className='d-flex align-items-center justify-content-center head--perso pl-5 pr-5 text-center w-50 rounded titre--perso2'>Information sur le client</legend>
                        {ligne1.map(lign => (
                            <Contain option={lign.option} value={lign.info}></Contain>
                        )
                        )}


                    </fieldset>
                </div>
                {/* <div className='col-md-5 ' >
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
            </div> */}
            </div>


            <div className='row mb-5 d-flex align-items-center justify-content-center '>
                <div className=' col-12'>
                    <fieldset className=' container-devi text-light rounded'>
                        <legend className='d-flex align-items-center justify-content-center head--perso pl-5 pr-5 text-center w-50 rounded titre--perso2'>Information sur le client</legend>
                        <div className='row d-flex align-items-center'>
                            <div className='col-4'>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <Select
                                        native
                                        value={res.status}
                                        onChange={handleChange}
                                        label="Age"
                                        inputProps={{
                                            name: 'age',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option value={10}>Devis</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </Select>
                                </FormControl>
                            </div>

                            <div className='col-2 ml-auto '>
                                <p className=' text-success'> Exiprer dans {res.valide} jr </p>
                            </div>

                        </div>

                        <div className='row d-flex align-items-center justify-content-center'>
                            <div className='col-5'>
                                {ligne2.map(lign => (
                                    <Contain option={lign.option} value={lign.info}></Contain>
                                )
                                )}
                            </div>
                        </div>


                        <div className='row '>

                            {
                                res.envoi ? null :
                                    <div className='col-2 ml-auto'>
                                        <button className='btn btn-primary' onClick={() => { getdate() }}>Envoyer par Email</button>
                                    </div>
                            }

                        </div>
                        <div className='row '>
                            <div className='col-2 ml-auto'>
                                <Link onClick={() => window.location.href = `/devis/${res.id}/visuel`} >
                                    <button className='btn btn-primary'>
                                        Visualiser
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    )
}
