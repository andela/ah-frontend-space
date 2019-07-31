/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Article extends React.Component {
  ArticleContent = () => {
    const {
      article: {
        author: { username }, created_at, body, title, rating,
        read_time, likes_count, dislikes_count, slug,
      },
    } = this.props;
    // eslint-disable-next-line camelcase
    const createdAt = new Date(created_at).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    return (
      <div className="article">
        <div className="article-header">
          <h1 className="article_title">
            <strong>{title}</strong>
            {' '}
                  by
            {' '}
            {username}
          </h1>
          <h2 className="date">
            <strong>published</strong>
            {' '}
                  on:
            {' '}
            { createdAt }
          </h2>
          {/* //this is where the like component will come */}
          <Interest src="https://img.icons8.com/dotty/80/000000/thumbs-up.png" value={likes_count} alternative="Likes" />
          <Interest src="https://img.icons8.com/dotty/80/000000/thumbs-down.png" value={dislikes_count} alternative="disLikes" />

          <h2 className="ratings">
            <strong>ratings:</strong>
            {' '}
            { rating }
          </h2>
        </div>

        <hr className="my-3" />
        <p className="body">
          { `${body.slice(0, 1000)}....`}
        </p>
        <div>
          <p className="readtime">
            <strong>Readtime:</strong>
            {' '}
            { read_time }
          </p>
        </div>
        <div className="readmore">
          {' '}
          <Link to={`/${slug}`} className="more">readmore...</Link>
        </div>
      </div>
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
      width="15"
      height="15"
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

Article.propTypes = {
  article: PropTypes.shape().isRequired,
};

Interest.defaultProps = {
  src: '',
};

export default Article;
