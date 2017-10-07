import React from 'react'
import PropTypes from 'prop-types'
import { formatDate } from '../utils/format'

const Appointment = ({appointment}) =>
  <div className='appointment'>
    <h3>{appointment.title}</h3>
    <p>{formatDate(appointment.appt_time)}</p>
  </div>

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
}

export default Appointment

//// Second way
// const Appointment = (props) => {
//   return (
//     <div className='appointment'>
//       <h3>{props.appointment.title}</h3>
//       <p>{formatDate(props.appointment.appt_time)}</p>
//     </div>
//   )
// }
