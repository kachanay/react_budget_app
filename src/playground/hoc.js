import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info} </p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>THis is private Info. Please don't share</p>
      <WrappedComponent {...props} />
    </div>
  )
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {
        props.isAuthenticated &&
        <WrappedComponent {...props} />
      }
      {
        !props.isAuthenticated &&
        <p>Please login </p>
      }
    </div>
  )
}

const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info)

ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the props" />, document.getElementById('root'));