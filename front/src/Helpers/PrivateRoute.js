import React from 'react'
import {Redirect,Route} from 'react-router-dom'

export const PrivateRoute = ({component:Component, ...rest})=> (
    <Route
    {...rest}
    render={props => sessionStorage.getItem("id")? (
        <Component {...props}/>
    ) : (
        <Redirect
            to={{
                pathname:'/login',
                state:{from: props.location }
            }}
            />
    )
  }
  />
);
