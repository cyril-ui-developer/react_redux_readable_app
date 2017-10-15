import React, { Component} from 'react';
import { connect } from 'react-redux';
import CategoriesList from '../components/categories-list';
import PostList from '../components/posts-list';
import { fetchPost , saveComment, updateComment, fetchComments, deletePost, deleteComment, votePost, voteComment} from '../actions/action';
import  CategoryPostList  from '../components/category-posts-list';
import  PostDetails  from '../components/post-details';
import  CommentDetails from '../components/comment-details'
import { NavLink, Route } from 'react-router-dom';
import CommentForm from '../components/comment-form';
import { SubmissionError } from 'redux-form';
import { Redirect } from 'react-router';
import PostCard from '../components/post-card';
import { Link } from 'react-router-dom';
import { Card, Button, Icon } from 'semantic-ui-react';
import sortBy from 'sort-by';
import  SortOrders  from '../components/sort-orders';

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

  submitVotePost = (postId, vote) => {
  if(postId) {
    console.log(postId)
    console.log(vote)
    return this.props.votePost(postId, vote)
      .then(response => this.setState({ redirect:false}))
      .catch(err => {
         throw new SubmissionError(this.props.errors)
       })
   }
 }


  submitVoteComment = (postId, vote) => {
  if(postId) {
    console.log(postId)
    console.log(vote)
    return this.props.voteComment(postId, vote)
      .then(response => this.setState({ redirect:false}))
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
    this.defaultSort = true;
  }

  render() {
    let sortedData = [];
    let sortedComments = this.props.comments;
    if(this.defaultSort){
       sortedData  = this.props.comments.sort(sortBy('-voteScore'))
    }else{
       sortedData = this.props.posts;
    }
  

   console.log(this.props.post)
    return (
      <div>
           {/*{ (Object.keys(this.props.post).length !== 0) ?*/}
        <div> 
            <NavLink className='close-create-contact' to='/'>Back</NavLink>
            <h1>Post Details</h1> <br />
            <PostDetails key={this.props.post.id} postDetails={this.props.post} commentDetails={this.props.comments}  deletePost={this.props.deletePost}
             votePost={this.submitVotePost}/>        
            <br />   <br />   <br />
            <Link exact  to={`/commentnew`}>  Add New Comment </Link>
            <hr />
             { this.props.comments.length !== 0 ?
               <section>
                <h3> Comments </h3> 
                <SortOrders unSortData={this.props.comments} onSortData={(sortedData) => {this.forceUpdate() ; this.defaultSort = false}}/>
                  <br /> <br />
                <CommentDetails  key={this.props.comment.id}  post={this.props.post} commentDetails={ sortedComments } onComment={(comment) => {}}  
                deleteComment={this.props.deleteComment} voteComment={this.submitVoteComment}/>                
              </section>
              : <h3> No Comment Available </h3> }
           </div>
           {/*: <Redirect to="/nopostfound" />}    */}
          {this.state.redirect ?
          <Redirect to="/" /> :null}
       </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
      post: state.postsStore.post,
      comment: state.commentsStore.comment,
      comments: state.commentsStore.comments     
  }
}

export default connect(mapStateToProps, {fetchPost, deletePost, saveComment, updateComment, fetchComments
, deleteComment, votePost, voteComment})(PostDetailsPage);