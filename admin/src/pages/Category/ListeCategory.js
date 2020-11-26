import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'

export default class ListeCategory extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {value: ''};
    //   this.handleChange = this.handleChange.bind(this);
    // }
    state = {value: ''};

    componentDidMount() {
        const { action } = this.props;
        action.getCategory();

    }
    handleChange(e) {
      this.setState({value: e.target.value});

    }

    render() {
        const { categories, action } = this.props;
        return (
            <div className="py-4">
                <div class="col-md-12 col-sm-12  ">
                <div class="x_panel">
                    <div class="x_content">
                         <div class="table-responsive">
                      <table class="table table-striped jambo_table bulk_action">
                        <thead>
                          <tr class="headings">
                          
                            <th class="column-title"> </th>
                            <th class="column-title">ref </th>
                            <th class="column-title">Titre du produit </th>
                            <th class="column-title">Stock</th>
                            <th class="column-title">En ligne </th>
                            <th class="column-title"> </th>
                            <th class="column-title no-link last">Classement</th>
                          </tr>
                        </thead>

                        <tbody>
                        {categories && categories.map(category => {
                            return (
                            <tr class="even pointer">
                                <td class=" ">{category.id} </td>
                                <td class=" ">{category.ref} <i class="success fa fa-long-arrow-up"></i></td>
                                <td class=" ">{category.category}</td>
                                <td class=" "><input type="text" value={this.state.value} onChange={this.handleChange}/></td>
                                <td>
                                    <span><input name="plan" type="checkbox" /></span>
                                </td>
                                <td > 
                                    <NavLink to={`/categories/${category.id}`}>
                                    <a class="btn btn-app">
                                      <i class="fa fa-edit"></i> Edit
                                    </a>
                                    </NavLink>
                                    </td>
                            
                               
                                <td class=" last">
                                    <a href="#">1</a>
                                </td>
                            </tr>
                                  )
                              })}
                        </tbody>
                      </table>
                    </div>
							
						
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
