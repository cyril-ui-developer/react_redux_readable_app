import React, { Component} from 'react';
import PostForm from '../components/post-form';
import { connect } from 'react-redux';
import { newPost, savePost, updatePost, fetchPost, fetchCategories } from '../actions/index';
import { SubmissionError } from 'redux-form';
import { Redirect } from 'react-router';
import { uniqueId } from '../helper-functions/unique-id'

class PostFormPage extends Component {

  state = {
    redirect: false
  }

  componentDidMount=() =>{
    this.props.fetchCategories();
    const { id } = this.props.match.params;
    if(id){
    this.props.fetchPost(id)
    } else {
      this.props.newPost();
    }
  }
  

submit = (post) => {
  if(!post.id) {
    let datetime = Date.now();
    post.id = uniqueId();
    post.timestamp = datetime;
    return this.props.savePost(post)
      .then(response => this.setState({ redirect:true}))
      .catch(err => {
         throw new SubmissionError(this.props.errors)
       })
  } else {
    return this.props.updatePost(post)
      .then(response => this.setState({ redirect:true }))
      .catch(err => {
         throw new SubmissionError(this.props.errors)
       })
  }
}

  render() {
   const { post, categories} = this.props;
    return (
      <div>
        {
          this.state.redirect ? <Redirect to={`/`} />
        : <PostForm categories={categories} post={post} onSubmit={this.submit} />
        }       
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      categories : state.postsStore.categories,
      post: state.postsStore.post,
  }
}

export default connect(mapStateToProps, {fetchCategories, newPost, savePost, fetchPost, updatePost})(PostFormPage);