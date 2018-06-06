import React from 'react';
import Navigation from './navigation';

import css from './css/root-styles.css';

export default class Root extends React.Component {
    constructor(props){
        super(props);

        this.scrollPageToTop = this.scrollPageToTop.bind(this);
    }

    scrollPageToTop() {

    }

    render(){
        return (
            <div id="root-container">
                <Navigation />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <div id="up" onClick={this.scrollPageToTop} style={{background: "url(../img/up.png) 0 0 no-repeat"}}></div>
            </div>
        );
    }
}
