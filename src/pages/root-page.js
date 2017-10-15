import React, { Component} from 'react';
import { connect } from 'react-redux';
import CategoriesList from '../components/categories-list';
import PostList from '../components/posts-list';
import { fetchCategories, fetchPosts, votePost , fetchComments, deletePost} from '../actions/action';
import sortBy from 'sort-by';
import  SortOrders  from '../components/sort-orders';
import { SubmissionError } from 'redux-form';
import { Redirect } from 'react-router';

class RootPage extends Component {
 
  componentDidMount() {
   let cmArr =["1ca0c417-8346-f5fe-09b3-74291edc3462", "8xf0y6ziyjabvozdd253nd"]
    this.props.fetchCategories();
    this.props.fetchPosts();
    let sortedPosts = this.props.posts.sort(sortBy('-voteScore'))
     this.defaultSort = true;
    
  
    cmArr.map(id => {
      return (
        this.props.fetchComments(id),
        this.props.comments.concat(this.props.comments)
      )
    })
   
  }
  
  
  submitVotePost = (postId, vote) => {
  if(postId) {
    console.log(postId)
    console.log(vote)
    return this.props.votePost(postId, vote)
      .then(response => this.setState({ redirect:true}))
      .catch(err => {
         throw new SubmissionError(this.props.errors)
       })
   }
 }

render() {
console.log(this.props.comments)
    let sortedData = [];
    if(this.defaultSort){
       sortedData  = this.props.posts.sort(sortBy('-voteScore'))
    }else{
       sortedData = this.props.posts;
    }
  
    return (
      <div>
        <h1>List of Categories</h1>
        <CategoriesList categories={this.props.categories}/>
          <h1>List of Posts</h1>
        <SortOrders unSortData={this.props.posts} onSortData={(sortedData) => {this.forceUpdate(); this.defaultSort = false}}/>
        <PostList posts={sortedData} votePost={this.submitVotePost} deletePost={this.props.deletePost}
        postCommentsCount={this.props.comments}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      categories: state.postsStore.categories,
      posts: state.postsStore.posts,
      comments: state.commentsStore.comments     
  }
}

export default connect(mapStateToProps, {fetchCategories, fetchPosts,votePost, fetchComments, deletePost})(RootPage);