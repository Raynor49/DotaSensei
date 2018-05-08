import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return(
      <div>This is the session page</div>
    )
  }
}

export default withRouter(SessionForm);
