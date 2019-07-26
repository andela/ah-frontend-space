/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

class HomeDetails extends React.Component {
  ArticleContent = () => {
    const { article } = this.props;
    // eslint-disable-next-line camelcase
    const createdAt = new Date(article.created_at).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    return (
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
            <img
              src="https://img.icons8.com/ultraviolet/40/000000/rating.png"
              alt="ratings"
              width="20"
              height="20"
            />
          </h2>
        </div>

        <hr className="my-3" />
        {article.image ? <img src={article.image} alt="article_image" className="body container img" /> : null }
        <p className="body">
          { article.body}
        </p>
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

export default HomeDetails;
