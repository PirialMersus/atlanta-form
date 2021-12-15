import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form/Form";
import masterCardImg from "./img/visaMasterCardPayal.png"

function App() {
    return (
        <div className="App">
            <div className="content">
                <div className="titleBlock">
                    <h3 className="title">Credit card (PayPal)</h3>
                    <img src={masterCardImg} alt="image"/>
                </div>
                <Form/>
            </div>
        </div>
    );
}

export default App;
