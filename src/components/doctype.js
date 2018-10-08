import React, { Component } from 'react';
import './doctype.css'
const moment = require('moment') 

export default class Doctype extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: Date.now(),
      usrDate: 0
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      now: Date.now()
    });
  }
  
  render() {
    let now = moment(this.state.now)
    let usrDate = moment(this.props.inputDate * 1000);
    const dur = moment.duration(now.diff(usrDate));

    const secs = dur.get('seconds');
    const mins = dur.get('minutes');
    const hours = dur.get('hours');
    const days = dur.get('days');
    const months = dur.get('months');
    const years = dur.get('years');

    return (
      <div className="wrapper">
        <div className='years-col'>{years} years</div>
        <div className='months-col'>{months} months</div>
        <div className='days-col'>{days} days</div>
        <div className='hours-col'>{hours} hours</div>
        <div className='mins-col'>{mins} mins</div>
        <div className='secs-col'>{secs} secs</div>
      </div>
    );
  }
}