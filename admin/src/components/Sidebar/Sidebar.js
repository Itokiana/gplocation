import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.styles.scss';


export default class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar-block" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
                data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
                <div className="app-title">
                    GPLOCATION
                </div>
                <div className="app-menu">
                    <NavLink to="/dashbord" className="hover:text-white">
                        <div className="menu-item">Tableau de bord</div>
                    </NavLink>

                    <NavLink to="/reservations" className="hover:text-white">
                        <div className="menu-item">Réservations</div>
                    </NavLink>

                    <NavLink to="/categories" className="hover:text-white">

                        <div className="menu-item">Véhicules</div>
                    </NavLink>
                    <NavLink to="/configuration_agence" className="hover:text-white">
                        <div className="menu-item">Configuration agence</div>
                    </NavLink>
                    <NavLink to="/utilisateurs" className="hover:text-white">
                        <div className="menu-item">Utilisateurs</div>
                    </NavLink>
                    {/* <NavLink to="/clientMessage" className="hover:text-white">
                        <div className="menu-item">Message </div>
                    </NavLink> */}
                    <NavLink to="/planning" className="hover:text-white">
                        <div className="menu-item">Planning </div>
                    </NavLink>
                </div>
            </div>
        )
    }
}
