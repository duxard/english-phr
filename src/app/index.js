import React from 'react';
import ReactDOM from 'react-dom';

import MainComponent from './components/MainComponent';

class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <MainComponent />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("wrapper"));
