import React, { Component} from 'react';
import { connect } from 'react-redux';
import CategoriesList from '../components/categories-list';
import PostList from '../components/posts-list';
import { fetchCategories, fetchPosts } from '../actions/action';

class RootPage extends Component {

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <h1>List of Categories</h1>
        <CategoriesList categories={this.props.categories}/>
          <h1>List of Posts</h1>
        <PostList posts={this.props.posts}/>
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