import React from 'react';
import LoginRegister from './components/LoginRegister';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
    }
    this.grabToken = this.grabToken.bind(this);
  }

  grabToken(token) {
    this.setState({ token: token });
  }

  render() {
    return (
      <React.Fragment>
        <LoginRegister grabToken={this.grabToken} />
      </React.Fragment>
    );
  }
}
