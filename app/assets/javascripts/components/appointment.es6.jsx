const Appointment = ({appointment}) =>
  <div className='appointment'>
    <h3>{appointment.title}</h3>
    <p>{formatDate(appointment.appt_time)}</p>
  </div>

//// Second way
// const Appointment = (props) => {
//   return (
//     <div className='appointment'>
//       <h3>{props.appointment.title}</h3>
//       <p>{formatDate(props.appointment.appt_time)}</p>
//     </div>
//   )
// }