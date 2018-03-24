import React from 'react';

import './css/num.css';

export default class TestNumericField extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            inputText: "",
            lineLength: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            inputText: e.target.value,
            lineLength: e.target.value.length
        });
    }

    handleSubmit(e){
        e.preventDefault();
    }

    render(){
        return (
            <div id="testSection_1">
                <div className="text-center">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="numericField">Валидным считается пароль состоящий <strong>только</strong> из цифр длиной от 1-6 символов</label>
                        <input type="text"
                               id="numericField"
                               className="form-control"
                               aria-describedby="emailHelp"
                               maxLength="10"
                               onChange={this.handleChange}
                               value={this.state.inputText} />
                        <button id="sendBtn" className="btn btn-primary">Send</button>
                    </form>
                    <hr/>
                    <p id="lnl">Длина строки: <span>{this.state.lineLength}</span></p>
                </div>
            </div>

        );
    }
}
