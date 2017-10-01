import React from 'react'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime'

export default class AppointmentForm extends React.Component {
  handleChange (e) {
    const name = e.target.name;
    const obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  setAppointmentTime (e) {
    const name = 'appt_time';
    const obj = {};
    if(obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  }

  handleSubmit (e) {
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
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input name='title' placeholder='Appointment Title'
                 value={this.props.title}
                 onChange={(e) => this.handleChange(e)} />
          <Datetime input={false} open={true} inputProps={inputProps}
                    value={this.props.appt_time}
                    onChange={(e) => this.setAppointmentTime(e)} />
          <input type='submit' value='Make Appointment' className='submit-button' />
        </form>
      </div>
    )
  }
}
