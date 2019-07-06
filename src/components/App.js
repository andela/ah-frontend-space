import React, { Component } from 'react';
import {
  Route, BrowserRouter, Switch, Link,
} from 'react-router-dom';
import Home from './Home';
import Login from './login';
import notFound from './notfound';


class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/login" className="login"> Login </Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route component={notFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
