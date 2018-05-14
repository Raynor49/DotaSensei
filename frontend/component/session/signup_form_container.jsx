import { connect } from 'react-redux';
import SessionForm from './session_form.jsx'
import React from 'react';
import { signup } from '../../actions/session_actions.js';

const mapStateToProps = (state) => {
  return({
    formType: 'Signup'
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    processForm: (user) => dispatch(signup(user))
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
