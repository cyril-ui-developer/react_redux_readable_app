import React, { Component} from 'react';
import { connect } from 'react-redux';
import CategoriesList from '../components/categories-list';
import PostList from '../components/posts-list';
import { fetchCategories, fetchPosts , fetchCategoryPosts} from '../actions/action';
import  CategoryPostList  from '../components/category-posts-list';
import { NavLink, Route } from 'react-router-dom';
import  SortOrders  from '../components/sort-orders';

class CategoryPostPage extends Component {

  componentDidMount() {
    
  const { name } = this.props.match.params;
  let pageTitle = name;
   console.log(pageTitle)
    this.props.fetchCategoryPosts(name);
  }


  render() {
   let sortedData = this.props.categoryPosts;

    return (
      <div>
       <NavLink className='close-create-contact' to='/'>Back</NavLink>
        <h1>List of {this.pageTitle} Category Posts</h1>
        <SortOrders unSortData={this.props.categoryPosts} onSortData={(sortedData) => {this.forceUpdate()}}/>
        <CategoryPostList catPosts={sortedData}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      categoryPosts: state.readableStore.categoryPosts
  }
}

export default connect(mapStateToProps, {fetchCategoryPosts})(CategoryPostPage);