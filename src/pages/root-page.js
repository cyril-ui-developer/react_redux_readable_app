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
    let sortedPosts = this.props.posts.sort(sortBy('-voteScore'))
 
  }

 voteDescOrder = () => {
  let sortedPosts =  this.props.posts.sort(sortBy('-voteScore'))
    this.forceUpdate()
   return sortedPosts;
  }
 voteAscOrder= () => {
     let sortedPosts = this.props.posts.sort(sortBy('voteScore'))
      this.forceUpdate()
    return sortedPosts;
  }

 timestampDescOrder = () => {
   let sortedPosts  =this.props.posts.sort(sortBy('-timestamp'))
    this.forceUpdate()
   return sortedPosts;
  }
 timestampAscOrder= () => {
     let sortedPosts = this.props.posts.sort(sortBy('timestamp'))
      this.forceUpdate()
    return sortedPosts;
  }
render() {
  //set default sort not working
  // let sortedPosts = this.props.posts.sort(sortBy('-voteScore'))
let sortedPosts = this.props.posts;
   
    return (
      <div>
        <h1>List of Categories</h1>
        <CategoriesList categories={this.props.categories}/>
          <h1>List of Posts</h1>
       <button onClick={this.voteAscOrder}>Vote(ASC)</button>
       <button onClick={this.voteDescOrder}>Vote(DESC)</button>
       <span> | </span>
       <button onClick={this.timestampAscOrder}>Timestamp(ASC)</button>
       <button onClick={this.timestampDescOrder}>Timestamp(DESC)</button>
        <PostList posts={sortedPosts} />
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