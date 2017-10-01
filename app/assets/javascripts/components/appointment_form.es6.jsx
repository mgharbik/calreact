class AppointmentForm extends React.Component {
  handleChange (e) {
    const name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  setAppointmentTime (e) {
    const name = 'appt_time';
    obj = {};
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
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input name='title' placeholder='Appointment Title'
                 value={this.props.title}
                 onChange={this.handleChange.bind(this)} />
          <Datetime input={false} open={true} inputProps={inputProps}
                    value={this.props.appt_time}
                    onChange={this.setAppointmentTime.bind(this)} />
          <input type='submit' value='Make Appointment' className='submit-button' />
        </form>
      </div>
    )
  }
}
