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
        this.handlePaste = this.handlePaste.bind(this);
    }

    resetInputField() {
        this.setState({
            inputText: "",
            lineLength: 0
        });
    }

    handleChange(e){
        this.setState({
            inputText: e.target.value,
            lineLength: e.target.value.length
        });
    }

    handlePaste(e){
        e.preventDefault();
    }

    handleSubmit(e){
        e.preventDefault();

        if(this.state.inputText === ""){
            alert("ERROR: пустая строка");
        }else if( !/^\d{1,6}$/.test(this.state.inputText) ){
            alert("ERROR - невалидная строка");
            this.resetInputField();
        }else{
            alert("Отправлено!");
            this.resetInputField()
        }
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
                               onPaste={this.handlePaste}
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
