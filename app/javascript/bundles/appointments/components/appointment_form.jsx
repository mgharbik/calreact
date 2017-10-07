import React from 'react'
import PropTypes from 'prop-types'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime'
import moment from 'moment'
import { validations } from '../utils/validations';

export default class AppointmentForm extends React.Component {
  static propTypes = {
    title: PropTypes.shape({
      value: PropTypes.string.isRequired,
      valid: PropTypes.bool.isRequired,
    }).isRequired,
    appt_time: PropTypes.shape({
      value: PropTypes.instanceOf(Date).isRequired,
      valid: PropTypes.bool.isRequired,
    }).isRequired,
    formValid: PropTypes.bool.isRequired,
    onUserInput: PropTypes.func.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  }

  static formValidations = {
    title: [
      (s) => { return validations.checkMinLength(s, 3) },
      (s) => { return validations.checkMaxLength(s, 10) }
    ],
    appt_time: [
      (t) => { return validations.timeShouldBeInTheFuture(t) }
    ],
  }

  focus = () => {
    this.titleInput.focus();
  }

  handleChange = (e) => {
    const fieldName = this.titleInput.name;
    const fieldValue = this.titleInput.target.value;
    this.props.onUserInput(fieldName, fieldValue, AppointmentForm.formValidations[fieldName]);
  }

  setAppointmentTime = (e) => {
    const fieldName = 'appt_time';
    const fieldValue = e.toDate();
    this.props.onUserInput(fieldName, fieldValue, AppointmentForm.formValidations[fieldName]);
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
            ref={(input) => { this.titleInput = input } }
            value={this.props.title.value}
            onChange={this.handleChange} />
          <input type='button' value='Focus the text input' onClick={this.focus} />
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
