import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Article from './Article';
import Tags from './Tags';
import articleAction from '../../actions/articleActions';
import spinner from '../../assets/images/spinner.gif';


export class Home extends React.Component {
  state = {
    articles: [],
    loading: false,
  }

  componentWillMount() {
    const { getArticleActions } = this.props;
    getArticleActions();
    this.setState({
      loading: true,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { articleState: { articles } } = nextProps;
    this.setState({
      articles,
      loading: false,
    });
  }


  render() {
    const { articles, loading } = this.state;
    return (
      <div className="row container-fluid">
        <div className="col-md-10">
          { loading ? <img src={spinner} alt="loading...." className="loader" /> : null }
          { articles.length > 0 ? articles.map(article => (
            <div className="articles">
              <Article article={article} />
            </div>
          )) : <p className="no__articles">No Articles</p>}
        </div>
        <div className="col-md-2">
          <Tags />
        </div>

      </div>
    );
  }
}
export const mapStateToProps = (state) => {
  const { articles } = state;
  return {
    articleState: articles,
  };
};

export default connect(mapStateToProps, { getArticleActions: articleAction })(Home);

Home.propTypes = {
  getArticleActions: PropTypes.func.isRequired,
  articleState: PropTypes.shape(),
};

Home.defaultProps = {
  articleState: {},
};
