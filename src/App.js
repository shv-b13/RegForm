import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm'
import './App.css';



class App extends Component {
    render() {
        return (
            <div className="box">
                <div className="container">
                    <RegistrationForm/>
                </div>
            </div>

        );
    }
}

export default App;
