import {connect} from 'react-redux'
import React from 'react'
import SessionForm from './session_form.jsx'
import {login} from '../../actions/session_actions.js'

const mapStateToProps = (state) => {
  return ({
      formType: 'Login'
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (user) => dispatch(login(user))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
