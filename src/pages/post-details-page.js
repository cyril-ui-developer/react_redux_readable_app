import React, { Component} from 'react';
import { connect } from 'react-redux';
import { fetchPost , saveComment, updateComment, fetchComments, deletePost, deleteComment, votePost, voteComment} from '../actions/index';
import  PostDetails  from '../components/post-details';
import  CommentDetails from '../components/comment-details'
import { NavLink } from 'react-router-dom';
import { SubmissionError } from 'redux-form';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import sortBy from 'sort-by';
import  SortOrders  from '../components/sort-orders';

class PostDetailsPage extends Component {

  state = {
    redirect: false
  }

  componentDidMount() {   
    const { id} = this.props.match.params;
    this.props.fetchPost(id);
    this.props.fetchComments(id)
    this.defaultSort = true;
  }

  submitVotePost = (postId, vote) => {
  if(postId) {
    return this.props.votePost(postId, vote)
      .then(response => this.setState({ redirect:false}))
      .catch(err => {
         throw new SubmissionError(this.props.errors)
       })
   }
 }


  submitVoteComment = (postId, vote) => {
  if(postId) {
    return this.props.voteComment(postId, vote)
      .then(response => this.setState({ redirect:false}))
      .catch(err => {
         throw new SubmissionError(this.props.errors)
       })
  }
  }

  render() {
    let sortedData = [];
    let sortedComments = this.props.comments;
    if(this.defaultSort){
       sortedData  = this.props.comments.sort(sortBy('-voteScore'))
    }else{
       sortedData = this.props.posts;
    }
  
    return (
      <div>
           {/*{ (Object.keys(this.props.post).length !== 0) ?*/}
        <div> 
            <NavLink className='close-create-contact' to='/'>Back</NavLink>
            <h1>Post Details</h1> <br />
            <PostDetails 
                key={this.props.post.id} 
                postDetails={this.props.post} 
                commentDetails={this.props.comments}  
                deletePost={this.props.deletePost}
                votePost={this.submitVotePost}
            />        
            <br />   <br />   <br />
            <Link to={`/commentnew`}>  Add New Comment </Link>
            <hr />
             { this.props.comments.length !== 0 ?
               <section>
                <h3> Comments </h3> 
                <SortOrders 
                   unSortData={this.props.comments} 
                   onSortData={(sortedData) => {this.forceUpdate() ; this.defaultSort = false}}
                />
                  <br /> <br />
                <CommentDetails 
                   key={this.props.post.id} 
                   post={this.props.post} 
                   commentDetails={ sortedComments } onComment={(comment) => {}}  
                   deleteComment={this.props.deleteComment} voteComment={this.submitVoteComment} 
                />                
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
  return {
      post: state.postsStore.post,
      comment: state.commentsStore.comment,
      comments: state.commentsStore.comments     
  }
}

export default connect(mapStateToProps, {fetchPost, deletePost, saveComment, updateComment, fetchComments
, deleteComment, votePost, voteComment})(PostDetailsPage);