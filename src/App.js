import React, { Component } from 'react';
import RegistrationForm from './registrationComponent/RegistrationForm.js';
import './App.css';
import Stand from "./stand/Stand.js";



class App extends Component {
    render() {
        return (
                <div className="box">
                    <div className="container">
                        <h1>Регистрационная форма</h1>
                        <RegistrationForm/>
                    </div>
                    <Stand/>
                </div>
        );
    }
}

export default App;
