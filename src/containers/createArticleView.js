import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import firebase from '../firebase/firebase.config';
import createArticleAction from '../actions/createArticleActions';
import CreateArticle from '../components/createArticle';
import { Authenticated } from '../routes/Authenticated';


export class CreateArticleView extends Component {
    state = {
      article: {
        title: '',
        description: '',
        body: '',
      },
      image: '',
      status: 0,
    };

    componentWillReceiveProps(nextProps) {
      if (nextProps.isValid) {
        const { history } = this.props;
        history.push(`/${nextProps.payload.article.slug}`);
      }
    }

    onChangeHandlerArticle = (event) => {
      const { article } = this.state;
      const newArticle = {
        ...article,
        [event.target.name]: event.target.value,
      };
      this.setState({
        article: newArticle,
      });
    }

    /* istanbul ignore next */
    handleImageUpload = (event) => {
      if (event.target.files[0]) {
        const file = event.target.files[0];
        const upload = firebase.storage().ref(`images/${file.name}`).put(file);
        upload.then(() => {
          firebase.storage().ref(`images/${file.name}`).getDownloadURL().then((url) => {
            this.setState({
              image: url,
            });
          });
        });
        upload.on('state_changed', (snapshot) => {
          const status = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          );
          this.setState({ status });
        });
      }
    }


    onSubmitHandler = (event) => {
      const { createArticles } = this.props;
      const { article: { title, description, body }, image } = this.state;
      event.preventDefault();
      const data = {
        title,
        description,
        body,
        image,
      };
      createArticles(data);
    }

    render() {
      const { article: { title, description, body }, status, image } = this.state;
      return (
        <div>
          <CreateArticle
            title={title}
            description={description}
            body={body}
            image={this.handleImageUpload}
            onChange={this.onChangeHandlerArticle}
            onSubmit={this.onSubmitHandler}
            status={status}
            display={image}
          />
        </div>
      );
    }
}
CreateArticleView.propTypes = {
  isValid: PropTypes.bool.isRequired,
  payload: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  createArticles: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  isValid: state.createReducer.isValid,
  payload: state.createReducer.payload,
});

export default connect(mapStateToProps,
  { createArticles: createArticleAction })(Authenticated(CreateArticleView));
