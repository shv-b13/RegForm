import React, { Component } from 'react';
import RegistrationForm from '../registrationComponent/RegistrationForm.js';
import Stand from "../standComponent/Stand.js";
import './Monitor.css';



class Monitor extends Component {
    render() {
        return (
            <div className="box">
                <div className="container">
                    <RegistrationForm/>
                </div>
                <Stand/>
            </div>
        );
    }
}

export default Monitor;
