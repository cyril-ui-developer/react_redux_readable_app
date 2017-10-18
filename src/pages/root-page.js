import React, { Component} from 'react';
import { connect } from 'react-redux';
import CategoriesList from '../components/categories-list';
import PostList from '../components/posts-list';
import { fetchCategories, fetchPosts, votePost , fetchComments, deletePost} from '../actions/index';
import sortBy from 'sort-by';
import  SortOrders  from '../components/sort-orders';
import { SubmissionError } from 'redux-form';
import { Redirect } from 'react-router';


class RootPage extends Component {

  componentDidMount() {
      this.defaultSort = true;
      this.props.fetchCategories();
      this.props.fetchPosts();
  }


  submitVotePost = (postId, vote) => {
  if(postId) {
    return this.props.votePost(postId, vote)
      .then(response => this.setState({ redirect:true}))
      .catch(err => {
         throw new SubmissionError(this.props.errors)
       })
   }
 }

render() {
    let sortedData = [];
    if(this.defaultSort){
       sortedData  = this.props.posts.sort(sortBy('-voteScore'))
    }else{
       sortedData = this.props.posts;
    }
  
    return (
      <div>
        <h1>Categories</h1>
        <CategoriesList categories={this.props.categories}/>
          <h1>Posts</h1>
        <SortOrders unSortData={this.props.posts} onSortData={(sortedData) => {this.forceUpdate(); this.defaultSort = false}}/>
        <PostList posts={sortedData} votePost={this.submitVotePost} deletePost={this.props.deletePost}
        postCommentsCount={this.props.comments} allPostsComments={this.props.allPostsComments}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      categories: state.postsStore.categories,
      posts: state.postsStore.posts   
  }
}

export default connect(mapStateToProps, {fetchCategories, fetchPosts,votePost, fetchComments, deletePost})(RootPage);