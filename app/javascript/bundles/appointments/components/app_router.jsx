import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Appointments from './appointments'
import Appointment from './appointment'
import AppHeader from './app_header'

export default (props) => {
  return (
    <Router>
      <div>
        <AppHeader />
        <Route exact path='/' render={routeProps => (
          <Appointments {...routeProps} appointments={props.appointments} />
        )} />
        <Route path='/appointments/:id' component={Appointment} />
      </div>
    </Router>
  )
}


