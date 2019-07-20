import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomeDetails from './articleDetails';
import spinner from '../../assets/images/spinner.gif';
import articleDetailAction from '../../actions/articleActions/articleDetailActions';


export class ArticleDetails extends React.Component {
  state = {
    loading: false,
    singleArticle: {
      author: {
        username: '',
      },
    },
  }

  componentWillMount() {
    // eslint-disable-next-line no-shadow
    const { match, articleDetailAction } = this.props;
    articleDetailAction(match.params.slug);
    this.setState({
      loading: true,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { article } = nextProps;
    this.setState({
      singleArticle: article,
      loading: false,
    });
  }

  render() {
    const { singleArticle, loading } = this.state;
    return (
      <div className="row container-fluid">
        <div className="col-md-10">
          <div className="articles">
            { loading ? <img src={spinner} alt="loading...." className="loader" /> : null }
            { singleArticle
              ? <HomeDetails article={singleArticle} />
              : <h1 className="no__articles">No Articles</h1>}
            <div className="detail-tag">
              <h1 className="tags-detail-heading"> Tags</h1>
              <div className="badge badge-primary">
                cool
              </div>
              <div className="badge badge-primary">
                cool
              </div>
              <div className="badge badge-primary">
                cool
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  article: state.articleDetailReducer.article,
});

ArticleDetails.propTypes = {
  articleDetailAction: PropTypes.func,
  match: PropTypes.shape(),
  article: PropTypes.shape(),
};

ArticleDetails.defaultProps = {
  match: {},
  article: {},
  articleDetailAction: () => {},
};

export default connect(mapStateToProps, { articleDetailAction })(ArticleDetails);
