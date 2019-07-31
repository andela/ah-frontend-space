/* eslint-disable react/no-unused-state */
import React from 'react';
import '../assets/css/popup.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as deleteArticleAction from '../actions/articleActions/deleteArticleActions';


export class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      deleted: false,
    };
  }

    deleteArticle = () => {
      const { slug, actions } = this.props;
      this.setState({
        deleted: true,
      });
      actions.deleteArticleAction(slug)
        .then(() => {
          /* istanbul ignore next */
          setTimeout(() => {
            window.location.replace('/');
          }, 3000);
        });
    };

    render() {
      const { closePopup } = this.props;
      return (
        <div className="popup">
          <div className="popup_inner">
            <p>Are you sure you want to delete?</p>
            <button type="button" className="btn-danger" onClick={this.deleteArticle}>Delete</button>
            <button type="button" className="btn-primary" onClick={closePopup}>Cancel</button>
          </div>
        </div>
      );
    }
}

export const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(deleteArticleAction, dispatch),
});

Popup.propTypes = {
  actions: PropTypes.shape().isRequired,
  slug: PropTypes.string.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(Popup);
