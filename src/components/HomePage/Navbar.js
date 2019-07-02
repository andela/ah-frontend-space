import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const bar = (Recent, recentRef, About, aboutRef) => (
  <React.Fragment>
    <Link className="nav-item  nav-link active px-1" to={recentRef}>{Recent}</Link>
    <i className="nav-link">|</i>
    <Link className="nav-item  nav-link" to={aboutRef}>{About}</Link>
  </React.Fragment>
);


const NavContent = isAuthenticated => (
  <div className="navbar navbar-default navbar-white">
    <div className="container-fluid">
      <h1 className="navbar-header">
            ᴀᴜᴛʜᴏʀs |
        {' '}
        <i>Haven</i>
      </h1>
      <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
      <div className="navbar-expand">
        <ul className="navbar-nav">
          <li className="">
            {bar('Recent Articles', '/', 'About', 'none')}
          </li>
          <li className="px-3">
            { isAuthenticated
              ? bar('Account', '/profile', 'SignOut', '/signout')
              : bar('SignIn', '/signin', 'SignUp', 'none')
            }
          </li>
        </ul>
      </div>
    </div>
  </div>
);


export class NavBar extends React.Component {
  state = {
    loggedIn: false,
  }

  componentWillMount() {
    const loggedIn = sessionStorage.getItem('isLoggedIn');
    if (loggedIn) {
      this.setState({
        loggedIn: true,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { user: { isAuthenticated } } = nextProps;
    this.setState({
      loggedIn: isAuthenticated,
    });
  }


  render() {
    const { loggedIn } = this.state;
    return (
      NavContent(loggedIn)
    );
  }
}

NavBar.propTypes = {
  user: PropTypes.shape(),
};

NavBar.defaultProps = {
  user: {},
};

export const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(NavBar);
