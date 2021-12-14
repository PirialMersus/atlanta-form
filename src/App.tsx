import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form/Form";

function App() {
    return (
        <div className="App">
            <div className="content">
                <div className="headerBlock">
                    <h3 className="title">Credit card (PayPal)</h3>
                    <img src="/img/visaMasterCardPayal.png" alt="image"/>
                </div>
                <Form/>
            </div>
        </div>
    );
}

export default App;
