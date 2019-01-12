import React, { Component } from 'react';
import RegistrationForm from './registrationComponent/RegistrationForm.js';
import './App.css';



class App extends Component {
    render() {
        return (
            <div className="box">
                <div className="container">
                        <h1>Регистрационная форма</h1>
                    <RegistrationForm/>
                </div>
            </div>

        );
    }
}

export default App;
