import React, { Component} from 'react';
import { connect } from 'react-redux';
import CategoriesList from '../components/categories-list';
import PostList from '../components/posts-list';
import { fetchPost , saveComment, updateComment, fetchComments} from '../actions/action';
import  CategoryPostList  from '../components/category-posts-list';
import  PostDetails  from '../components/post-details';
import  CommentDetails from '../components/comment-details'
import { NavLink, Route } from 'react-router-dom';
import CommentForm from '../components/comment-form';
import { SubmissionError } from 'redux-form';
import { Redirect } from 'react-router';
import PostCard from '../components/post-card';
import { Card } from 'semantic-ui-react';

class PostDetailsPage extends Component {

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

  submit = (comment) => {
  if(!comment.id) {
   
    // let uniqueId =  _.uniqueId('readable_app_');;
    let datetime = Date.now();
    comment.id = this.uniqueId();
    comment.parentId= this.props.post.id
    comment.timestamp = datetime;
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
  componentDidMount() {
    
  const { id} = this.props.match.params;
  let pageTitle = id;
   console.log(pageTitle)
    this.props.fetchPost(id);
    this.props.fetchComments(id)
  }


  render() {

   console.log(this.props.comments)
    return (
      <div>
        <NavLink className='close-create-contact' to='/'>Back</NavLink>
         <h1>Post Detail</h1>
         <PostDetails postDetails={this.props.post} commentDetails={this.props.comments} />
         
         <CommentForm parentId={this.props.post} onSubmit={this.submit} />
         <CommentDetails commentDetails={this.props.comments} /> 
       
          {this.state.redirect ?
          <Redirect to="/" /> :null}
       </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
      post: state.readableStore.post,
      comment: state.readableStore.comment,
      comments: state.readableStore.comments
  }
}

export default connect(mapStateToProps, {fetchPost, saveComment, updateComment, fetchComments})(PostDetailsPage);