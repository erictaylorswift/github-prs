import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  
  componentWillMount() {
    fetch('/pull-requests')
      .then(res => { return res.json() })
      .then(data => this.setState(data));
  }

  render() {
    let pull = this.state.data;
    console.log('pull ', pull.data);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GOOD</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
