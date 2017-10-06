import React, { Component} from 'react';
import { connect } from 'react-redux';
import CategoriesList from '../components/categories-list';
import PostList from '../components/posts-list';
import { fetchCategories, fetchPosts } from '../actions/action';
import sortBy from 'sort-by';
import  SortOrders  from '../components/sort-orders';

class RootPage extends Component {

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPosts();
    let sortedPosts = this.props.posts.sort(sortBy('-voteScore'))
 
  }

render() {
  //set default sort not working
  // let sortedPosts = this.props.posts.sort(sortBy('-voteScore'))
 let sortedData = this.props.posts;
    return (
      <div>
        <h1>List of Categories</h1>
        <CategoriesList categories={this.props.categories}/>
          <h1>List of Posts</h1>
        <SortOrders unSortData={this.props.posts} onSortData={(sortedData) => {this.forceUpdate()}}/>
        <PostList posts={sortedData} />
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