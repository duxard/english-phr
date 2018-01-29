import React from 'react';

export default class Navigation extends React.Component {
    render(){
        return(
            <div>
                <div className="navbar navbar-inverse navbar-static-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#responsiveMenu">
                                <span className="sr-only">Open nav</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a href="#" className="navbar-brand">Logo</a>
                        </div>
                        <div className="collapse navbar-collapse" id="responsiveMenu">
                            <ul className="nav navbar-nav">
                                <li><a href="#">Words</a></li>
                                <li><a href="#">Links</a></li>
                                <li><a href="#">Info</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
