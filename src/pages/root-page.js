import React, { Component} from 'react';
import { connect } from 'react-redux';
import CategoriesList from '../components/categories-list';
import PostList from '../components/posts-list';
import { fetchCategories, fetchPosts, votePost , fetchComments} from '../actions/action';
import sortBy from 'sort-by';
import  SortOrders  from '../components/sort-orders';
import { SubmissionError } from 'redux-form';
import { Redirect } from 'react-router';

class RootPage extends Component {
 
  componentDidMount() {
 
    this.props.fetchCategories();
    this.props.fetchPosts();
    let sortedPosts = this.props.posts.sort(sortBy('-voteScore'))
  
    // let commentsArr =[]
    // this.props.posts.map(post => {
    //   return (
      this.props.fetchComments("8xf0y6ziyjabvozdd253nd")
  
    //   )
    // })
  
  }
  componentWillReceiveProps(){
      let commentsArr =[]
    // this.props.posts.map(post => {
    //   // return (
      this.props.fetchComments("8xf0y6ziyjabvozdd253nd")
    //   //  // console.log(post.id)
      
    //   //     )
    //   //   })
    // for (let i = 0; i < this.props.posts.length; i++) { 
    //   this.props.fetchComments(i.id)
    //   console.log(this.props.posts.length)
  //}
        console.log(commentsArr )
    console.log(this.props.posts)
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
 
  let sortedData = this.props.posts;
    return (
      <div>
        <h1>List of Categories</h1>
        <CategoriesList categories={this.props.categories}/>
          <h1>List of Posts</h1>
        <SortOrders unSortData={this.props.posts} onSortData={(sortedData) => {this.forceUpdate()}}/>
        <PostList posts={sortedData} votePost={this.submitVotePost}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  // let commentsArr =[]
  // state.readableStore.posts.map(post => {
  //   return (
  //   commentsArr.push(this.props.fetchComments(post.id))

  //   )
  // })
  // console.log(commentsArr)


  return {
      categories: state.readableStore.categories,
      posts: state.readableStore.posts,
      comments: state.readableStore.comments     
  }
}

export default connect(mapStateToProps, {fetchCategories, fetchPosts,votePost, fetchComments})(RootPage);