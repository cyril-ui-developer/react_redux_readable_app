import React, { Component} from 'react';
import CommentForm from '../components/comment-form';
import { connect } from 'react-redux';
import { newComment, saveComment, fetchPost, updateComment, fetchComment } from '../actions/index';
import { SubmissionError } from 'redux-form';
import { Redirect } from 'react-router';
import { uniqueId } from '../helper-functions/unique-id'

class CommentFormPage extends Component {

  state = {
    redirect: false
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    if(id){
    this.props.fetchComment(id)
    } else {
      this.props.newComment();
    }
   // this.forceUpdate();
  }
  

submit = (comment) => {
  if(!comment.id) {
    let datetime = Date.now();
    comment.id = uniqueId();
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
          <Redirect to={`/${post.category}/${post.id}`} /> :
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