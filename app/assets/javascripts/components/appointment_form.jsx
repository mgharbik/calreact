var AppointmentForm = React.createClass({
  handleChange: function(e) {
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  setAppointmentTime: function(e) {
    var name = 'appt_time';
    obj = {};
    if(obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onFormSubmit()
  },

  render: function() {
    var inputProps = {
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
                    value={this.props.appt_time}
                    onChange={this.setAppointmentTime} />
          <input type='submit' value='Make Appointment' className='submit-button' />
        </form>
      </div>
    )
  }
});
