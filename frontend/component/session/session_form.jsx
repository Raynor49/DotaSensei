import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    this.props.processForm(this.state)
  }

  changeState(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input onChange={this.changeState('username')} type='text' value={this.state.username}/>
          </label>

          <label>Password
            <input onChange={this.changeState('password')} type='password' value={this.state.password}/>
          </label>

          <input type='submit' value={this.props.formType}/>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
