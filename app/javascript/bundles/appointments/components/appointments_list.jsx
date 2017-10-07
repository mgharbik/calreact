import React from 'react'
import PropTypes from 'prop-types'
import Appointment from './appointment'

export const AppointmentsList = ({appointments}) =>
  <div>
    {appointments.map(function(appointment) {
      return (
        <Appointment appointment={appointment} key={appointment.id} />
      )
    })}
  </div>

AppointmentsList.propTypes = {
  appointments: PropTypes.array.isRequired,
}

export default AppointmentsList
