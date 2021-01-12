import React, { Component } from 'react';

export default class ListeUtilisateur extends Component {
    componentDidMount() {
        const { action } = this.props;
        this.interval = setInterval(() =>
            action.getUtilisateur()
            , 1000)
        
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { utilisateurs, action } = this.props;
        return (
            <div className="py-4">
                <h2>Liste des utilisateurs</h2>
                <div className="mt-2">
                    <table className="table-auto">
                        <thead>
                            <tr>
                            <th className="border px-4 py-2">Identifiant</th>
                            <th className="border px-4 py-2">Email</th>
                            <th className="border px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { utilisateurs && utilisateurs.map(utilisateur => {
                                return (
                                    <tr>
                                        <td className="border px-4 py-2">{ utilisateur.username }</td>
                                        <td className="border px-4 py-2">{ utilisateur.email }</td>
                                        <td className="border px-4 py-2"><span className="text-red-500 cursor-pointer" onClick={() => action.deleteUtilisateur(utilisateur)}>Supprimer</span></td>
                                    </tr>
                                )
                            }) }
                            
                        </tbody>
                    </table>
                </div>
                
                { utilisateurs && utilisateurs.length === 0 ? (<>Aucun utilisateur disponible pour le moment.</>) : null }
                
                
            </div>
        )
    }
}
