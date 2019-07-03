import React from 'react';

const greet = 'login here';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <h1>{greet}</h1>
    );
  }
}


export default Login;
