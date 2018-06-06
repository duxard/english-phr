import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute, Link } from 'react-router';

import Root from './components/root';
import MainComponent from './components/main-component';
import About from './components/about';
import TestNumericField from './components/test-numeric-field';
import RegisterForm from './components/register';
import Inputs from './components/inputs';

class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Root}>
                    <IndexRoute component={MainComponent} />
                    <Route path="about" component={About}></Route>
                    <Route path="numeric" component={TestNumericField}></Route>
                    <Route path="reg" component={RegisterForm}></Route>
                    <Route path="inputs" component={Inputs}></Route>
                </Route>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("wrapper"));
