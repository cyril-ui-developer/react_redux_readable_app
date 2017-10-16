import React, { Component} from 'react';
import { connect } from 'react-redux';
import CategoriesList from '../components/categories-list';
import PostList from '../components/posts-list';
import { fetchCategories, fetchPosts, votePost , fetchComments, deletePost, fetchPostsComments} from '../actions/action';
import sortBy from 'sort-by';
import  SortOrders  from '../components/sort-orders';
import { SubmissionError } from 'redux-form';
import { Redirect } from 'react-router';


class RootPage extends Component {

  componentDidMount() {
    //let cmArr =["3980f3fd-803e-4fea-5cd6-d12fd2b41c4a", "dca74d13-7f4b-4923-b0e0-11dd37ba7f8d"]
      this.defaultSort = true;
      this.props.fetchCategories();
      this.props.fetchPosts();
  }

// this method cause the propgram to enter infinite loop
/*shouldComponentUpdate(newProps, newState) {
   if (newProps.posts) {
       this.props.posts.map(data => {
          return (        
           this.props.fetchPostsComments(data.id),
          console.log('shouldComponentUpdate')
      )
      })
          return true;
        } else {
          return false
        }
  }
*/
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
console.log(this.props.allPostsComments)
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
      posts: state.postsStore.posts,
   //   comments: state.commentsStore.comments,
      allPostsComments:state.commentsStore.allPostsComments
           
  }
}

export default connect(mapStateToProps, {fetchCategories, fetchPosts,votePost, fetchComments, deletePost, fetchPostsComments})(RootPage);