import React from 'react';
import { Link } from 'react-router-dom';


const bar = (Recent, recentRef, About, aboutRef) => (
  <React.Fragment>
    <Link className="nav-item  nav-link active px-1" to={recentRef}>{Recent}</Link>
    <i className="nav-link">|</i>
    <Link className="nav-item  nav-link" to={aboutRef}>{About}</Link>
  </React.Fragment>
);


const NavContent = () => (
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
            {bar('Login', 'none', 'SignUp', '/signup')}
          </li>
        </ul>
      </div>
    </div>
  </div>
);


class NavBar extends React.Component {
  render() {
    return (
      NavContent()
    );
  }
}

export default NavBar;
