import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = { value: [] };
    }

    async getData() {
        let resp = await fetch('/api/get/1',
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        if (resp.status === 200) {
            let value = await resp.json();
            return value;
        }
    }

    async componentDidMount() {
        let value = await this.getData();
        this.setState({ value: value });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <p>{this.state.value}</p>
                </header>
            </div>
        );
    }
}

export default App;
