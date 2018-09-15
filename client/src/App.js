import React, { Component } from 'react';
import './App.css';
import PullCard from './components/cards';
import SimpleAppBar from './components/appbar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  
  componentDidMount() {
    fetch('/pull-requests')
      .then(res => res.json())
      .then(pulls => this.setState({data: pulls.data.data}))
      .then(logs => console.log(this.state.data))
  }

  render() {
    let pulls = this.state ? this.state.data: null;

    return (
      <div className="App">
        <SimpleAppBar />
        <PullCard data={pulls}/>
      </div>
    );
  }
}

export default App;
