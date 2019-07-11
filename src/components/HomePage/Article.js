import React from 'react';
import PropTypes from 'prop-types';

class Article extends React.Component {
  ArticleContent = () => (
    <div className="article">
      <div className="article-header">
        <h1 className="article_title">
          <strong>Article Title</strong>
          {' '}
                  by nicholas
        </h1>
        <h2 className="date">
          <strong>published</strong>
          {' '}
                  on: dd/mm/yy
        </h2>
        {/* //this is where the like component will come */}
        <Interest src="https://img.icons8.com/metro/26/000000/long-arrow-down.png" value={3} alternative="Likes" />
        <Interest src="https://img.icons8.com/metro/26/000000/long-arrow-down.png" value={1} alternative="disLikes" />

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
      <p className="body">
            Libero, purus nulla mauris euismod maecenas. Egestas penatibus cubilia rutrum dignissim
            sociis nisi vel nunc conubia. Eu porta auctor nulla vitae lacinia vehicula molestie!
            Conubia dui mi odio habitasse himenaeos montes ipsum porttitor vitae adipiscing pharet
            ra metus. Litora sagittis lectus praesent condimentum et dictum malesuada iaculis. Vi
            tae facilisi interdum montes iaculis. Mus varius parturient diam habitasse tellus! Ma
            ssa phasellus malesuada praesent cum id mauris. Inceptos curabitur, donec porttitor
            urna sapien mattis nisl.
      </p>
      <p1>
        <p className="readtime">
          <strong>Readtime:</strong>
          {' '}
              Xmins
        </p>
      </p1>
      <p1 className="readmore"> Read more .....</p1>
    </div>
  )

  render() {
    return (
      <div>
        {this.ArticleContent()}
      </div>
    );
  }
}

export const Interest = ({
  value, alternative,
}) => (
  <div>
    <img
      src="https://img.icons8.com/metro/26/000000/long-arrow-up.png"
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
};

export default Article;
