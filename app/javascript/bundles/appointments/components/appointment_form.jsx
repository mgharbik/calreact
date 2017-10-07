import React from 'react'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime'
import moment from 'moment'

export default class AppointmentForm extends React.Component {
  handleChange = (e) => {
    const name = e.target.name;
    const obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  setAppointmentTime = (e) => {
    const name = 'appt_time';
    const obj = {};
    if(obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit()
  }

  render () {
    const inputProps = {
      name: 'appt_time'
    }
    return (
      <div>
        <h3>Make a new Appointment</h3>
        <form onSubmit={this.handleSubmit}>
          <input name='title' placeholder='Appointment Title'
            value={this.props.title}
            onChange={this.handleChange} />
          <Datetime input={false} open={true} inputProps={inputProps}
            value={moment(this.props.appt_time)}
            onChange={this.setAppointmentTime} />
          <input type='submit' value='Make Appointment'
            className='submit-button'
            disabled={!this.props.formValid} />
        </form>
      </div>
    )
  }
}
