import React, { Component} from 'react';
import { connect } from 'react-redux';
import CategoriesList from '../components/categories-list';
import PostList from '../components/posts-list';
import { fetchCategories, fetchPosts , fetchCategoryPosts} from '../actions/action';
import  CategoryPostList  from '../components/category-posts-list';

class CategoryPostPage extends Component {

  componentDidMount() {
    
  const { name } = this.props.match.params;
    this.props.fetchCategoryPosts(name);
  }


  render() {
    console.log(this.props.categoryPosts)
    return (
      <div>
        <h1>List of Category Post</h1>
        <CategoryPostList catPosts={this.props.categoryPosts}/>
      </div>
    )
  }
}

// Make contacts  array available in  props
function mapStateToProps(state) {
  console.log(state)
  return {
      categoryPosts: state.readableStore.categoryPosts
  }
}

export default connect(mapStateToProps, {fetchCategoryPosts})(CategoryPostPage);