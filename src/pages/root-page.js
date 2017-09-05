import React, { Component} from 'react';
import { connect } from 'react-redux';
import CategoriesList from '../components/categories-list';
import PostList from '../components/posts-list';
import { fetchCategories, fetchPosts } from '../actions/action';
import sortBy from 'sort-by';

class RootPage extends Component {

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPosts();
  }

 desc = () => {
   let postsData = this.props.posts.sort(sortBy('-voteScore'))
   return postsData;
   console.log('this.props.posts')
  }
   asc = () => {
    let postsData = this.props.posts.sort(sortBy('voteScore'))
    console.log(postsData )
    return postsData;
  }
  render() {
     let postsData = this.props.posts.sort(sortBy('-voteScore'))
     
    return (
      <div>
        <h1>List of Categories</h1>
        <CategoriesList categories={this.props.categories}/>
          <h1>List of Posts</h1>
      <button onClick={this.asc}>ASC </button>
        <PostList posts={postsData}/>
      </div>
    )
  }
}

// Make contacts  array available in  props
function mapStateToProps(state) {
  console.log(state)
  return {
      categories: state.readableStore.categories,
      posts: state.readableStore.posts
  }
}

export default connect(mapStateToProps, {fetchCategories, fetchPosts})(RootPage);