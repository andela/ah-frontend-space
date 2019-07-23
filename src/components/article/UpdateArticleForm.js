/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Input from '../common/Input';
import { TextArea } from '../common/TextArea';


const UpdateArticle = ({
  title,
  description,
  body,
  loading,
  onChange,
  onSubmit,
  imageOnChangeHandler,
  status,
  image,
}) => (
  <React.Fragment>
    <form className="text-center" onSubmit={onSubmit}>
      <div className="row">
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <Input
                id="edit-title"
                type="text"
                name="title"
                onChange={onChange}
                value={title}
              />
              <label htmlFor="title" id="title-form-label"> Title</label>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <TextArea
                id="edit-description"
                type="text"
                name="description"
                onChange={onChange}
                value={description}
                placeholder="Description goes here"
                required
              />
              <label htmlFor="description" id="description-form-label">Description</label>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <input
                id="image-input"
                type="file"
                name={image}
                onChange={imageOnChangeHandler}
              />
              <label htmlFor={image} id="description-form-label">Edit Image</label>
              <progress value={status} max={100} />
              <img
                src={image}
                alt=""
                width="200em"
                height="200em"
              />
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <TextArea
            id="edit-body"
            type="text"
            name="body"
            onChange={onChange}
            value={body}
            placeholder="Start typing here"
            required
          />
        </div>
      </div>
      {loading
        ? (
          <Loader
            type="Puff"
            color="#00bfff"
            height="20"
            width="20"
          />
        )
        : (
          <Input
            id="btn-edit-article"
            type="submit"
            className="btn-signin"
            onChange={onChange}
            value="Save"
            disabled={loading}
          />
        )

      }
    </form>

  </React.Fragment>
);


UpdateArticle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  imageOnChangeHandler: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
};


export default UpdateArticle;
