
import { Component } from 'react';

export class SignOut extends Component {
  render() {
    sessionStorage.clear();
    return (
      window.location.replace('/')
    );
  }
}

export default SignOut;
