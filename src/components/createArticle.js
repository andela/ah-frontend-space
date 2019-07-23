/* eslint-disable  jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import Input from './common/Input';


const CreateArticle = ({
  title,
  image,
  body,
  description,
  onChange,
  onSubmit,
  status,
  display,
}) => (
  <>
    <div className="create-article-form container ">
      <div className="row create-form1">
        <div className="container col-lg-6 col-md-8 col-sm-12 col-xs-12 wrapper">
          <h3>Create an Article</h3>
          <form onSubmit={onSubmit}>
            <div className="md-form">
              <textarea
                name="title"
                id="title"
                className="md-textarea form-control"
                rows="1"
                onChange={onChange}
                value={title}
                required
              />
              <label htmlFor="title" className="control-label">Title</label>
            </div>
            <div className="md-form">
              <textarea
                name="description"
                id="description"
                className="md-textarea form-control"
                rows="1"
                onChange={onChange}
                value={description}
                required
              />
              <label htmlFor="description" className="control-label">Description</label>
            </div>
            <div className="custom-file">
              <img
                src={display}
                alt=""
                width="370em"
                height="310em"
              />
              <input type="file" className="custom-file-input" id="customFileLang" lang="en" onChange={image} />
              <label className="custom-file-label" htmlFor="customFileLang">Image</label>
              <progress value={status} max="100" className="container-fluid" />
            </div>

            <div className="form-group">
              <label htmlFor="body">Body</label>
              <textarea
                className="form-control"
                id="body"
                name="body"
                rows="12"
                onChange={onChange}
                value={body}
                required
              />
            </div>
            <Input
              type="submit"
              id="submit"
              disabled={false}
              className="btn-signin"
              value="Submit"
            />
          </form>
        </div>
      </div>

    </div>
  </>
);


CreateArticle.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  description: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  image: PropTypes.func.isRequired,
  status: PropTypes.number.isRequired,
  display: PropTypes.string,
};
CreateArticle.defaultProps = {
  title: '',
  body: '',
  description: '',
  display: '',
};
export default CreateArticle;
