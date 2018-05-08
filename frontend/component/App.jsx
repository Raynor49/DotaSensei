import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import SessionFormContainer from './session/signup_form_container.jsx';

const App = () => {
  return(<div>
    <Switch>
      <Route exact path='/signup' component={SessionFormContainer}/>
    </Switch>
  </div>)
}

export default App;
