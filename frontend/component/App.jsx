import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container.jsx';
import LoginFormContainer from './session/login_form_container.jsx';

const App = () => {
  return(<div>
    <Switch>
      <Route exact path='/signup' component={SignupFormContainer}/>
      <Route exact path='/login' component={LoginFormContainer}/>
    </Switch>
  </div>)
}

export default App;
