import React, {Component} from 'react';
//import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
//import Page
import SignupPage from "./PublicRoute"


class RoutesComponent extends Component{
    render(){
return(      
        <div>
            <Switch>
            <Route exact path="/" component={SignupPage} />    
            </Switch>                
        </div>
        )
    }
}
export default RoutesComponent;