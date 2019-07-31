/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';


const Comments = ({ comments }) => (
  <div>
    <span style={{
      marginLeft: '550px', fontWeight: 'bolder', fontSize: '25px', color: 'grey',
    }}
    >
      {' '}
        Comments
      {' '}
    </span>
    {/* istanbul ignore next */}
    {comments && (comments.length > 0 && true) ? comments.map(
      (comment) => {
        const date = new Date(comment.created_at);
        const newLocal = date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        });
        return (
          <Fragment>
            <div className="card-width card">
              <div className="card-body">
                <img className="profile-pic" src={comment.author.image} alt="" width="10px" height="10px" />
                <span className="username">{comment.author.username}</span>
                <span className="timestamp">
                  <strong>published on:</strong>
                  { (newLocal) }
                </span>
                <hr />
                <p>{comment.comment_body}</p>
              </div>
            </div>
          </Fragment>
        );
      },
    ) : (
      <div className="card-width card">
        <div className="card-body">
          <p>there are no comments to be displayed at the moment</p>
        </div>
      </div>
    )
    }
  </div>
);

Comments.propTypes = {
  comments: PropTypes.shape().isRequired,
};
export default Comments;
