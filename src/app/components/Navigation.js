import React from 'react';
import { IndexLink, Link } from 'react-router';

import './css/nav.css';

export default class Navigation extends React.Component {
    render(){
        return(
            <div>
                <nav>
                    <div className="navbar navbar-inverse navbar-static-top">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#responsiveMenu">
                                    <span className="sr-only">Open nav</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a href="/" className="navbar-brand">
                                    <img src="../img/logo4.png" alt="logo" width="50" height="50"/>
                                </a>
                            </div>
                            <div className="collapse navbar-collapse" id="responsiveMenu">
                                <ul className="nav navbar-nav">
                                    <li><IndexLink to="/">Words</IndexLink></li>
                                    <li><Link to="about">About</Link></li>
                                    <li><Link to="numeric">Numeric</Link></li>
                                    <li><Link to="reg">Register</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
