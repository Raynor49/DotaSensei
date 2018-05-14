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
      <div>
        <form>
          <label>Username
            <input type='text' value={this.state.username}/>
          </label>

          <label>Password
            <input type='password' value={this.state.password}/>
          </label>

          <input type='submit' value={this.props.formType}/>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
