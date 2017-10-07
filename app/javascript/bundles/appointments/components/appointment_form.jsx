import React from 'react'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime'
import moment from 'moment'

export default class AppointmentForm extends React.Component {
  handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    this.props.onUserInput(fieldName, fieldValue);
  }

  setAppointmentTime = (e) => {
    const fieldName = 'appt_time';
    const fieldValue = e.toDate();
    this.props.onUserInput(fieldName, fieldValue);
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
            value={this.props.title.value}
            onChange={this.handleChange} />
          <Datetime input={false} open={true} inputProps={inputProps}
            value={moment(this.props.appt_time.value)}
            onChange={this.setAppointmentTime} />
          <input type='submit' value='Make Appointment'
            className='submit-button'
            disabled={!this.props.formValid} />
        </form>
      </div>
    )
  }
}
