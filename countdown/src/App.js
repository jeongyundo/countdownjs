import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {duedate: new Date(2019,12,31,24,0,0,0).getTime() };
  }

  tick() {
    this.setState(state => ({
      date: new Date().getTime(),
      duedate: state.duedate,
      dday: state.duedate-state.date,
      seconds: (state.duedate-state.date)/(1000),
      minutes: parseInt((state.duedate-state.date)/(1000*60)),
      hours: parseInt(state.minutes/60),
      dividedHours: state.hours%24,
      dividedDays: parseInt(state.hours/24),
      divededMinutes: state.minutes%60,
      dividedSeconds: parseInt(state.seconds%60)
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Date: {this.state.date}<br></br>
        D-day: {this.state.dday}<br></br>
        "days": {this.state.dividedDays}<br></br>
        "hours": {this.state.dividedHours}<br></br>
        "minutes": {this.state.divededMinutes}<br/>
        "seconds": {this.state.dividedSeconds}
      </div>
    );
  }
}

export default App;
