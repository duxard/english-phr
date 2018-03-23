import React from 'react';

import Navigation from './navigation';

export default class Root extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Navigation />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
