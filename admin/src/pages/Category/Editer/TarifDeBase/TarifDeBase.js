import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class TarifDeBase extends Component {
    state = {
    }
    render() {
        return (
            <div>
                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                        <form>
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">Combinaison</th>
                                        <th scope="col">Prix BS</th>
                                        <th scope="col">Prix MS</th>
                                        <th scope="col">Prix HS</th>
                                        <th scope="col">Active</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div >
                                                <input type="text" className="form-control" id="inputDJ"/>
                                            </div>
                                        </td>
                                        <td><input type="text" className="form-control" id="inputBS"/></td>
                                        <td><input type="text" className="form-control" id="inputMS"/></td>
                                        <td><input type="text" className="form-control" id="inputHS"/></td>
                                        <td >
                                            <div className="ml-4 mb-4">
                                                <input className="form-check-input " type="checkbox" value="" id="Check1"/>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </form>
                    
                      
                    </div>
                </section>

            </div>
        )
    }
}