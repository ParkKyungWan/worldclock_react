import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function WorldClock(props) {
//   return (
//     <div className="WorldClock">
//       <h2>도시: {props.city}</h2>
//       <p>시간: {props.time} 시 </p>
//     </div>
//   );
// }

class WorldClock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: this.props.time,
      minute: 0
    }

    this.timer = setInterval(() => {
      this.setState((state) => (
        state.minute === 59 ?

          {
            minute: 0,
            time: state.time + 1
          }
          : { minute: state.minute + 1 }

      ))
    }
      , 100)

  }

  stopthis = (event) => {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div className="WorldClock">
        <h3>도시: {this.props.city}</h3>
        <p>시간: {this.state.time} 시 {this.state.minute} </p>
        <button onClick={this.stopthis}>멈췃!</button>
      </div>
    );
  }

}

class App extends Component {
  constructor(props) {
    super(props)
    this.cityTimeData = [
      ['서울', 10],
      ['서울근처', 8],
      ['서울근처의근처', 5],
    ]
    this.state = {
      content: '',
    }
    this.WorldClockList = this.cityTimeData.map((citytime, index) =>
      (<WorldClock city={citytime[0]} time={citytime[1]} key={index} />)
    )
  }
  ChangeContent = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <br />
        <h1>1 - 무언가를 입력해보세요</h1>
        <textarea value={this.state.content} onChange={this.ChangeContent} />
        <p>state.content : {this.state.content}</p>
        <h1>2 - 세계 시간!!</h1><br />
        {this.WorldClockList}
      </div>
    );
  }
}


export default App;
