/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StarRatings from 'react-star-ratings';
import Popup from '../../utils/PopUp';
import rateAction from '../../actions/articleActions/rateArticleActions';

export class HomeDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      rating: 0,
    };
  }

  togglePopup = () => {
    const { showPopup } = this.state;
    this.setState({
      showPopup: !showPopup,
    });
  };


  changeRating = (event) => {
    const { article, rate } = this.props;
    this.setState({
      rating: event,
    });
    rate(article.slug, event);
  }

  ArticleContent = () => {
    const { article } = this.props;
    const { showPopup } = this.state;
    // eslint-disable-next-line camelcase
    const { rating } = this.state;
    const createdAt = new Date(article.created_at).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    return (
      <React.Fragment>
        <div className="article-detail">
          <div className="header-title"><h1>{article.title}</h1></div>
          <div className="article-header">
            <h1 className="article_title">
              <strong>Author</strong>
              {' '}
                  :
              {' '}
              {article.author.username}
            </h1>
            <p className="readtime">
              <strong>Readtime:</strong>
              {' '}
              { article.read_time }
            </p>
            <h2 className="date">
              <strong>published</strong>
              {' '}
                  on:
              {' '}
              { createdAt }
            </h2>
            {/* //this is where the like component will come */}
            <Interest src="https://img.icons8.com/dotty/80/000000/thumbs-up.png" value={article.likes_count} alternative="Likes" />
            <Interest src="https://img.icons8.com/dotty/80/000000/thumbs-down.png" value={article.dislikes_count} alternative="disLikes" />

            <h2 className="ratings">
              <strong>ratings:</strong>
              {' '}
              {article.rating}
            </h2>
          </div>

          <hr className="my-3" />
          {article.image ? <img src={article.image} alt="article_image" className="body container img" /> : null}
          <p>{showPopup ? <Popup text="slug" slug={article.slug} closePopup={this.togglePopup} /> : null }</p>
          <p className="body">
            { article.body}
          </p>
          {(article.user_rating) || article.author.username === sessionStorage.getItem('username') || sessionStorage.getItem('isLoggedIn') === null
            ? null
            : (
              <button type="submit" className="rate">
                <p>rate this article</p>
                {'  '}
                <StarRatings
                  rating={rating}
                  starRatedColor="blue"
                  changeRating={this.changeRating}
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                />
              </button>
            )
          }

        </div>
        {
          sessionStorage.getItem('username') === article.author.username
            ? (
              <div className="btn-container">
                <Link
                  className="btn btn-primary btn-md"
                  to={{
                    pathname: '/edit-article',
                    state: {
                      article,
                    },

                  }}
                >
                    Edit
                </Link>
                <button
                  id="delete-article-btn"
                  type="button"
                  className="btn btn-danger btn-md"
                  onClick={this.togglePopup}
                >
                    Delete
                </button>
              </div>
            )
            : <div />
        }
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        {this.ArticleContent()}
      </div>
    );
  }
}

export const Interest = ({
  value, alternative, src,
}) => (
  <div>
    <img
      src={src}
      alt={alternative}
      width="20"
      height="20"
    />
    <strong>
      :
      {' '}
      {value}
    </strong>
  </div>
);

Interest.propTypes = {
  value: PropTypes.string.isRequired,
  alternative: PropTypes.string.isRequired,
  src: PropTypes.string,
};

Interest.defaultProps = {
  src: '',
};

HomeDetails.propTypes = {
  article: PropTypes.shape().isRequired,
};
const mapStateToProps = state => ({
  rateReducer: state.rateArticleReducer,
});

export default connect(mapStateToProps, { rate: rateAction })(HomeDetails);
