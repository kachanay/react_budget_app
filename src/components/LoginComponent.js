import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export class LoginComponent extends React.Component {
  render() {
    return (
      <button onClick={this.props.signIn}>Login</button>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn() {
      dispatch(startLogin());
    }
  }
}

export default connect(undefined, mapDispatchToProps)(LoginComponent)