import React from 'react';
import axios from 'axios';

import './css/MainTableStyles.css';

var initialWordsList = [];

export default class MainTable extends React.Component{
    constructor(props){
        super(props);
        //this.clickHandler = this.clickHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            inputText: "",
            connotations: []
        };
    }

    componentDidMount(){
        axios.get('./resources/words.json').then( result => {
            initialWordsList = result.data.words
                .sort((a,b) => a>b)
                .map(i => ("to "+i));
            this.setState({connotations: initialWordsList});
        }).catch(err => console.log(err));
    }

    handleChange(e){
        var filteredList = initialWordsList.filter((item) => {
            return ~item.toLowerCase().indexOf(e.target.value.toLowerCase());
        });
        this.setState({
            inputText: e.target.value,
            connotations: filteredList
        });
    }

    handleSubmit(e){
        e.preventDefault();

    }

    static clickHandler(event){
        alert(true);
    }

    showInConsole(){
        var lis = document.querySelectorAll("#list li");
        Array.prototype.map.call(lis, function(item){
            console.log(item.innerText);
        });
    }

    render(){
        return (
            <div>
                <form id="form" onSubmit={this.handleSubmit}>
                    <label htmlFor="formInput">Example label</label>
                    <input type="text"
                           className="form-control"
                           id="formInput"
                           placeholder="Example input"
                           onChange={this.handleChange}
                           value={this.state.inputText}
                    />
                </form>
                <div>
                    <button onClick={this.showInConsole.bind(this)}>Calc</button>
                    <ul id="list" className="list-group">
                        {
                            this.state.connotations.map((item, index) => <li key={index} className="list-group-item">{item}</li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
