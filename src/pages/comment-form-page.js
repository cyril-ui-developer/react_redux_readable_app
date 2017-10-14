import React, { Component} from 'react';
import CommentForm from '../components/comment-form';
import { connect } from 'react-redux';
import { newComment, saveComment, fetchPost, updateComment, fetchComment } from '../actions/action';
import { SubmissionError } from 'redux-form';
import { Redirect } from 'react-router';

class CommentFormPage extends Component {

  state = {
    redirect: false
  }
  uniqueId = () => {
    function randomNumber() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return randomNumber() + randomNumber() + '-' + randomNumber() + '-' + randomNumber() + '-' +
      randomNumber() + '-' + randomNumber() + randomNumber() + randomNumber();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if(id){
    this.props.fetchComment(id)
    } else {
      this.props.newComment();
    }
  }
  

submit = (comment) => {
  if(!comment.id) {
    let datetime = Date.now();
    comment.id = this.uniqueId();
    comment.timestamp = datetime;
    comment.parentId= this.props.post.id;

    return this.props.saveComment(comment)
      .then(response => this.setState({ redirect:true }))
      .catch(err => {
         throw new SubmissionError(this.props.errors)
       })
  } else {
    return this.props.updateComment(comment)
      .then(response => this.setState({ redirect:true }))
      .catch(err => {
         throw new SubmissionError(this.props.errors)
       })
  }
}

  render() {
        const { post} = this.props;
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to={`/`} /> :
          <CommentForm  post={ this.props.post } comment={ this.props.comment } onSubmit={ this.submit } />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      post: state.postsStore.post,
      comment: state.commentsStore.comment,
  }
}

export default connect(mapStateToProps, {newComment, fetchComment, saveComment, fetchPost, updateComment})(CommentFormPage);