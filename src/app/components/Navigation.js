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
                                <li><a href="#">Item 1</a></li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Item 2<b className="caret"></b></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Subitem 1</a></li>
                                        <li><a href="#">Subitem 2</a></li>
                                        <li><a href="#">Subitem 3</a></li>
                                        <li className="divider"></li>
                                        <li><a href="#">Subitem 4</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Item 3</a></li>
                                <li><a href="#">Item 4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
