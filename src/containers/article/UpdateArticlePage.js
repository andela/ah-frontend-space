import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as updateArticleActions from '../../actions/articleActions/updateArticleActions';
import UpdateArticleForm from '../../components/article/UpdateArticleForm';
import { Authenticated } from '../../routes/Authenticated';
import firebase from '../../firebase/firebase.config';

export class UpdateArticlePage extends Component {
state = {
  article: {
    title: '',
    description: '',
    body: '',
    image: '',
    slug: '',
  },
  status: 0,
}

componentWillMount() {
  const { location: { state: { article } } } = this.props;
  this.setState({
    article,
  });
}

onChangeHandler = (event) => {
  const { article } = this.state;
  const editedArticle = {
    ...article,
    [event.target.name]: event.target.value,
  };
  this.setState({
    article: editedArticle,
  });
}

onSubmitHandler = (event) => {
  const { article } = this.state;
  const { actions } = this.props;
  const successMessage = 'Successfully updated article';
  event.preventDefault();
  actions
    .updateArticleData(article)
    .then((data) => {
      const { article: { slug } } = data;
      const redirectUrl = `/${slug}`;
      const { history } = this.props;
      toast.success(successMessage, {
        autoClose: 4000,
      });
      history.push(redirectUrl);
    });
}

/* istanbul ignore next */
uploadImage(files) {
  const fileLoad = firebase
    .storage()
    .ref(`images/${files[0].name}`)
    .put(files[0]);
  fileLoad.then(() => {
    firebase
      .storage()
      .ref(`images/${files[0].name}`)
      .getDownloadURL()
      .then((url) => {
        const image = {
          image: url,
        };
        const { article } = this.state;
        const editedArticle = {
          ...article,
          ...image,
        };
        this.setState({
          article: editedArticle,
        });
      });
  });
  fileLoad.on('state_changed', (snapshot) => {
    const status = Math.round(
      (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
    );
    this.setState({
      status,
    });
  });
}

render() {
  const {
    status,
    article: {
      title, description, body, image,
    },
  } = this.state;

  const { loading } = this.props;
  return (
    <div className="card update-article">
      <h5 className="card-header white-text text-center py-4">
        <strong>Edit Article</strong>
      </h5>
      <div className="card-body px-lg-5 pt-0">
        <UpdateArticleForm
          title={title}
          description={description}
          body={body}
          onChange={this.onChangeHandler}
          onSubmit={this.onSubmitHandler}
          loading={loading}
          image={image}
          status={status}
          imageOnChangeHandler={event => this.uploadImage(event.target.files)}
        />
      </div>
    </div>
  );
}
}

UpdateArticlePage.propTypes = {
  actions: PropTypes.shape().isRequired,
  loading: PropTypes.bool.isRequired,
  location: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
};

export function mapStateToProps(state) {
  return {
    data: state.data,
    errors: state.error,
    loading: state.apiCallsInProgress > 0,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(updateArticleActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Authenticated(UpdateArticlePage));
