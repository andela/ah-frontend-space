
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import commentActions from '../../actions/comments/CommentsAction';
import Comments from '../../components/HomePage/CommentsComponent';


export class Comment extends Component {
  componentDidMount() {
    const { slug, fetchComments } = this.props;
    fetchComments(slug);
  }

  render() {
    const { comment: { comments } } = this.props;
    return (<Comments comments={comments} />);
  }
}


export const mapStateToProps = state => (
  {
    comment: state.comments.comment,
  }
);


Comment.propTypes = {
  comment: PropTypes.shape().isRequired,
  slug: PropTypes.string.isRequired,
  fetchComments: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { fetchComments: commentActions })(Comment);
