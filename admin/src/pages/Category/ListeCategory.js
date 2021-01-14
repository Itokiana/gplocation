import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import { Formik, Field, Form} from 'formik';


export default class ListeCategory extends Component {
    constructor(props) {
      super(props);
      this.state = {categ: '',intvalue:null, id:[]};
     
    }

    componentDidMount() {
        const { action } = this.props;
        action.getCategory();
        this.getCat()
        
    }
    getCat(){
      axios.get('/categories').then(response => {
        if (response.status === 200) {
            this.setState({
                categ: response.data
                
            })
            console.log(this.state.categ)
            
        }
        const initvalues = {}
        const ids = []
        this.state.categ.map((value)=>{
          initvalues[`val${value.id}`] = value.stock
          ids.push(value.id)
          console.log(value.id)
          
        })
        this.setState({
          intvalue: initvalues,
          id: ids
        })
      })
      
    }
    deletecat(cat) {
      axios.delete(`/categories/${cat}`).then(response => {
          if (response.status === 204) {
              this.getCat();
          }
      })
    }
    
  


    render() {
        const { categories, action } = this.props;
        const stocId= this.state.id
        console.log(this.state.intvalue)

        return (<>
          {this.state.intvalue ?
            <Formik
            initialValues={this.state.intvalue}
            onSubmit={(value,{setSubmitting})=>{
              setSubmitting(true);
              axios.post('/categorie/stock', {
                  value, stocId
              })
              console.log(value) 
              setSubmitting(false);  
            }}
              
            >
              <Form class="w-full">
          
            <div className="py-4">
                <div class="col-md-12 col-sm-12  ">
                <div class="x_panel">
                    <div class="x_content">
                      <div class="table-responsive">
                      <table class="table table-striped jambo_table bulk_action">
                        <thead className="">
                          <tr class="headings">
                            <th class="column-title"></th>
                            <th class="column-title">ref </th>
                            <th class="column-title">Titre du produit </th>
                            <th class="column-title">Stock</th>
                            <th class="column-title">En ligne </th>
                            <th class="column-title"></th>
                            <th class="column-title no-link last">Classement</th>
                          </tr>
                        </thead>

                        <tbody>
                        {categories && categories.map((category, key) => {
                            return (  
                             
                            <tr class="even pointer">
                                <td class=""><img src="images/Spark.jpg" alt="image"/> </td>
                                <td class=" ">{category.ref} <i class="success fa fa-long-arrow-up"></i></td>
                                <td class=" ">{category.name}</td>
                                {/* <td class=" "><input type="text" value={this.state.value} onChange={this.handleChange}/></td> */}
                                <td >
                                  <div className=" d-flex p-0 justify-content-center align-items-center" style={{width:"150px"}}>
                                  
                                    <Field className=" block bg-gray-200 text-gray-700 border border-red-500 rounded py-2
                    px-1 leading-tight focus:outline-none focus:bg-white" style={{width:"50px"}} type="number"  name= {[`val${category.id}`]}/>
                                    <button
                                            type="submit"
                                            className="border border-green-500 bg-green-500 text-white rounded-md px-1 py-2 m-1
                                            transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                        >
                                            Valider
                                    </button>
                                  </div>
                               
                                </td>

                                <td>
                                    <span><input className="w-50" name="plan" type="checkbox" /></span>
                                </td>
                                <td > 
                                    <NavLink to={`/categories/${category.id}`}>
                                    <a class="btn btn-app">
                                      <i class="fa fa-edit"></i> Edit
                                    </a>
                                    </NavLink>
                                </td>
                            
                               
                                <td class=" last">
                                    <a href="#">{key+1}</a>
                                </td>
                                {/* <td>
                                  <button
                                    type="button" onClick={() => this.deletecat(category.id)}
                                    className="border border-green-500 bg-red-500 text-white rounded-md px-1 py-2 m-1
                                    transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                >
                                  supprimer
                                  </button>
                                </td> */}
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
            </Form>
            </Formik>: <h1 className="text-white">Charger</h1>}
       </>)
    }
}
