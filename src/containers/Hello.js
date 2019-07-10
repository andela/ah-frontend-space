/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import FirstAction from '../actions/FirstAction';


export class Hello extends Component {
  componentDidMount() {
    const { FirstAction } = this.props;
    FirstAction();
  }

  render() {
    return (
      <div>
        <h1>wassap</h1>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  index: state.index,
});

Hello.propTypes = {
  FirstAction: propTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  { FirstAction },
)(Hello);
