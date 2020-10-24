import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.styles.scss';
import ClientMessage from '../../pages/Message/ClientMessage';

export default class Sidebar extends Component {
    
    render() {
        return (
            <div className="sidebar-block">
                <div className="app-title">
                    GPLOCATION
                </div>
                <div className="app-menu">
                    <NavLink to="/" className="hover:text-white">
                        <div className="menu-item">Tableau de bord</div>
                    </NavLink>
                    <NavLink to="/reservations" className="hover:text-white">
                        <div className="menu-item">Liste des réservations</div>
                    </NavLink>
                    <NavLink to="/voitures" className="hover:text-white">
                        <div className="menu-item">Voitures</div>
                    </NavLink>
                    <NavLink to="/utilisateurs" className="hover:text-white">
                        <div className="menu-item">Utilisateurs</div>
                    </NavLink>
                    <NavLink to="/ClientMessage" className="hover:text-white">
                        <div className="menu-item">Message <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">4</button></div>
                    </NavLink>
                </div>
            </div>
        )
    }
}
