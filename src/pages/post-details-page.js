import React, { Component} from 'react';
import { connect } from 'react-redux';
import CategoriesList from '../components/categories-list';
import PostList from '../components/posts-list';
import { fetchPost } from '../actions/action';
import  CategoryPostList  from '../components/category-posts-list';
import  PostDetails  from '../components/post-details';
import { NavLink, Route } from 'react-router-dom';

class PostDetailsPage extends Component {

  componentDidMount() {
    
  const { id} = this.props.match.params;
  let pageTitle = id;
   console.log(pageTitle)
    this.props.fetchPost(id);
  }


  render() {
   
    return (
      <div>
        <NavLink className='close-create-contact' to='/'>Back</NavLink>
        <h1>Post Detail</h1>
        <PostDetails postDetails={this.props.post}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
      post: state.readableStore.post
  }
}

export default connect(mapStateToProps, {fetchPost})(PostDetailsPage);