import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import RollBoard from './RollButtons';
import ScoreBoard from './ScoreBoard';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.onRoll = this.onRoll.bind(this);

    this.state = {
      rolls: [],
      pinsDown: 0,
      firstRoll: true
    };
  }

  onRoll(number) {
    const newRolls = [number];
    let pinsDown = 0;
    let nextRollState = !this.state.firstRoll;

    if (this.state.firstRoll) {
      if (number == 10)
        nextRollState = true;
      else
        pinsDown = number;
    }

    this.setState({rolls: [...this.state.rolls, ...newRolls], pinsDown: pinsDown, firstRoll: nextRollState})
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React Bowling</h2>
        </div>
        <RollBoard onClick={this.onRoll} pinsDown={this.state.pinsDown}/>
        <ScoreBoard rolls={this.state.rolls}/>
      </div>
    );
  }
}

export default App;
