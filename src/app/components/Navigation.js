import React from 'react';
import { IndexLink, Link } from 'react-router';

import './css/nav.css';

export default class Navigation extends React.Component {
    constructor(props){
        super(props);

        this.hideMenu = this.hideMenu.bind(this);
        this.setAttributes = this.setAttributes.bind(this);

        this.state = {
            menuBtn: null,
            responsiveMenu: null
        };
    }

    componentDidMount(){
        this.setState({
            menuBtn: document.getElementById("navBtn"),
            responsiveMenu: document.getElementById("responsiveMenu")
        });
    }

    setAttributes(el, attrs) {
        for(var key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    }

    hideMenu(){
        this.setAttributes(this.state.responsiveMenu, {
            "class": "collapse navbar-collapse",
            "aria-expanded": "false",
            "style": "height: 1px"
        });
    }

    render(){
        return(
            <div>
                <nav>
                    <div className="navbar navbar-inverse navbar-static-top">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button"
                                        className="navbar-toggle"
                                        data-toggle="collapse"
                                        data-target="#responsiveMenu"
                                        id="navBtn">
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
                                    <li><IndexLink to="/" onClick={this.hideMenu}>Words</IndexLink></li>
                                    <li><Link to="about" onClick={this.hideMenu}>About</Link></li>
                                    <li><Link to="numeric" onClick={this.hideMenu}>Numeric</Link></li>
                                    <li><Link to="reg" onClick={this.hideMenu}>Register</Link></li>
                                    <li><Link to="inputs" onClick={this.hideMenu}>Inputs</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}