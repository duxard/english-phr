import React from 'react';

import './css/register.css'

export default class RegisterForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            login: "",
            password: "",
            loginIsValid: false,
            passwordIsValid: false
        };

        this.debouncer = this.debouncer.bind(this);
        this.validateLogin = this.validateLogin.bind(this);
        this.validatePass = this.validatePass.bind(this);

        this.validateLogin = this.debouncer(this.validateLogin, 1000);
        this.validatePass = this.debouncer(this.validatePass, 1000);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.verifyLogin = this.verifyLogin.bind(this);

    }

    handleSubmit(e){
        e.preventDefault();
        if( this.state.login.length
            && this.state.password.length
            && this.state.loginIsValid
            && this.state.passwordIsValid ){
            console.log(true)
        }else{
            console.log(false)
        }
    }

    verifyLogin(e){
        e.persist();
        this.setState({
            login: e.target.value
        });

        this.validateLogin(this.state.login);

    }

    render() {
        return (
            <div>
                <form id="regForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="login">Name</label>
                    <input type="text" id="login" className="form-control" onChange={this.verifyLogin} value={this.state.login}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" />
                    <button type="submit" className="btn btn-success" id="submit">Submit</button>
                </form>
            </div>
        );
    }

    validateLogin(login){
        console.log("validate ", login);
    }

    validatePass(password){
        console.log("validate ", password);
    }

    debouncer(f, ms){
        let timer = null;

        return function (...args) {
            const onComplete = () => {
                f.apply(this, args);
                timer = null;
            };

            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(onComplete, ms);
        };
    }
}
