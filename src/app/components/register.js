import React from 'react';

import './css/register.css'

export default class RegisterForm extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.error("Error");
    }

    render() {
        return (
            <div>
                <form id="regForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="login">Name</label>
                    <input type="text" id="login" className="form-control" />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" />
                    <button type="submit" className="btn btn-success" id="submit">Submit</button>
                </form>
            </div>
        );
    }
}
