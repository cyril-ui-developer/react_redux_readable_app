import React, { Component} from 'react';
import { connect } from 'react-redux';
import CategoriesList from '../components/categories-list';
import PostList from '../components/posts-list';
import { fetchCategories, fetchPosts , fetchCategoryPosts, votePost, deletePost} from '../actions/index';
import  CategoryPostList  from '../components/category-posts-list';
import { NavLink } from 'react-router-dom';
import  SortOrders  from '../components/sort-orders';
import { SubmissionError } from 'redux-form';
import { Redirect } from 'react-router';

class CategoryPostPage extends Component {
  
  componentDidMount() {
    const { name } = this.props.match.params;
    const pageTitle = name;
    this.props.fetchCategoryPosts(name);
    console.log(pageTitle )
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
   let sortedData = this.props.categoryPosts;

    return (
      <div>
       <NavLink className='close-create-contact' to='/'>Back</NavLink>
        <h1>List of Category Posts</h1>
        { this.props.categoryPosts.length !== 0 ?
          <section>
          <SortOrders 
              unSortData={this.props.categoryPosts} 
              onSortData={(sortedData) => {this.forceUpdate()}}
          />
          <CategoryPostList
             catPosts={sortedData} 
             votePost={this.submitVotePost} 
             deletePost={this.props.deletePost}
             allPostsComments={this.props.allPostsComments}
          />
          </section>
        : <p> No post available in this category  </p>}
      
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      categoryPosts: state.postsStore.categoryPosts,
      allPostsComments:state.commentsStore.allPostsComments
  }
}

export default connect(mapStateToProps, {fetchCategoryPosts, votePost, deletePost})(CategoryPostPage);