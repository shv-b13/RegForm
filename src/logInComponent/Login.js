import React, { Component } from 'react';

class LogIn extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.hanlePasswordChange = this.hanlePasswordChange.bind(this);



    }

    handleSubmit(event){
        event.preventDefault();
    }

    handleEmailChange(event){
        console.log('E-mail was changed', event.target.value);
        this.setState({email: event.target.value})
    }

    hanlePasswordChange(event){
        // console.log('Password was changed', event.target.value);
        this.setState({password: event.target.value})
    }

    render(){
        return(
            <div>
                <from onSubmit={this.handleSubmit}>
                    <input id="email"
                           type="email"
                           name = "Email"
                           required
                           placeholder="E-mail"
                           value={this.state.email}
                           onChange={this.handleEmailChange}/>

                    <input id="password"
                           type="password"
                           name = "Email"
                           required
                           placeholder="Password"
                           value={this.state.password}
                           onChange={this.hanlePasswordChange}/>

                    <button className="logIn">Войти</button>

                </from>
            </div>
        )
    }

}

export default LogIn;