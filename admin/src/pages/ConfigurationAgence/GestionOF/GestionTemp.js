import React, { Component } from 'react';
import GestionOF from './Components/GestionOF/GestionOF.js';
import GeastionOE from './Components/GestionOE/GestionOE.js'
import GestionFE from './Components/GestionFE/GestionFE.js';
import GestionJF from './Components/GestionJF/GestionJF.js';
class GestionTemp extends Component {
    render() {
        return (
            <div>
            <GestionOF />
            
            <GeastionOE />
            
            <GestionFE />
            <GestionJF />
            </div>
        );
    }
}

export default GestionTemp;
