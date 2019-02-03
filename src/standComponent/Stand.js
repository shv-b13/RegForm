import React, { Component } from 'react';
import "./stand.css"



class Stand extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="b0">
                    <div className="btns" id = 'i1'></div>
                    <div className="btns" id = 'i2'></div>
                    <div className="btns" id = 'i3'></div>
                    <div className="btns" id = 'i4'></div>
                    <div className="btns" id = 'i5'></div>
                </div>
                <div className="b1"></div>
                <div className="b2"></div>
            </div>
        );
    }
}

export default Stand;
