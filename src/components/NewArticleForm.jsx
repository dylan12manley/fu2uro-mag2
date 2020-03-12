import React, { Component } from "react";
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import constants from './../constants';
import { addArticle } from "../actions/index";
import './../../styles/forms.css';

const { c } = constants;

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state =
      masterArticleList = {
      title: '',
      author: '',
      publishDate: '',
      articleBody: '',
      mainImage: '',
      otherTimage: '',
      catagory: '',
      id: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title,
            author,
            publishDate,
            articleBody,
            mainImage } = this.state;
    this.props.addArticle({ author,
    publishDate,
    articleBody,
    mainImage,
    otherTimage,
    catagory  });
    this.setState({ title: "",
                    author: "",
                    publishDate: "",
                    articleBody: "",
                    mainImage: "" });
  }

  render() {
    const { title, author, publishDate, articleBody, mainImage } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="newArticleForm">
          <div className="formLable">
            <label htmlFor="title">Title</label>
          </div>
          <div className="forminput">
            <input
              type="text"
              id="title"
              value={title}
              className='formInput'
              onChange={this.handleChange}/>
          </div>
          <div className="formLable">
            <label htmlFor="author">Author</label>
          </div>
          <div className="forminput">
            <input
              type="text"
              id="author"
              value={author}
              className='formInput'
              onChange={this.handleChange}/>
          </div>
          <div className="formLable">
            <label htmlFor="publishDate">publishDate</label>
          </div>
          <div className="forminput">
            <input
              type="text"
              id="publishDate"
              value={publishDate}
              className='formInput'
              onChange={this.handleChange}/>
          </div>
          <div className="formLable">
            <label htmlFor="articleBody">Article Body</label>
          </div>
          <div className="forminput">
            <input
              type="text"
              id="articleBody"
              value={articleBody}
              className='formInput'
              onChange={this.handleChange}/>
          </div>
          <div className="formLable">
            <label htmlFor="mainImage">mainImage</label>
          </div>
          <div className="forminput">
            <input
              type="text"
              id="mainImage"
              value={mainImage}
              className='formInput'
              onChange={this.handleChange}/>
          </div>
        <button type="submit">SAVE</button>
      </div>
    </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
