import React from 'react';
import axios from 'axios';

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
            this.setState({connotations: result.data.words});
            console.log(this.state.connotations)
        }).catch(err => console.log(err));
    }

    handleChange(){
        this.setState({
            inputText: this.textInput.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.inputText);
    }

    static clickHandler(event){
        alert(true);
    }

    render(){
        return (
            <div>
                <form id="form" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.inputText} onChange={this.handleChange} ref={(input) => { this.textInput = input; }}/>
                    <br/>
                    <input type="submit"/>
                </form>
                <button id="btn" onClick={MainTable.clickHandler}>click</button>
                <div>
                    <ul id="list">
                        {
                            this.state.connotations.map((item, index) => <li key={index}>{item}</li>)
                        }
                    </ul>
                </div>

                <div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Example label</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Another label</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}
