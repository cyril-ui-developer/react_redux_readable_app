import React, { Component} from 'react';
import PostForm from '../components/post-form';
import { connect } from 'react-redux';
import { newPost, savePost, updatePost, fetchPost, fetchCategories } from '../actions/action';
import { SubmissionError } from 'redux-form';
import { Redirect } from 'react-router';
import _  from 'lodash';

class PostFormPage extends Component {

  state = {
    redirect: false
  }
  uniqueId = () => {
    function randomNumber() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return randomNumber() + randomNumber() + '-' + randomNumber() + '-' + randomNumber() + '-' +
      randomNumber() + '-' + randomNumber() + randomNumber() + randomNumber();
  }

  componentDidMount() {
    this.props.fetchCategories();
    // this.props.newPost();
    console.log(this.props.match.params)
  const { id } = this.props.match.params;
  if(id){
   this.props.fetchPost(id)
    // console.log(this.props.fetchPost(id))
    // this.props.fetchPost(id)
    //   .then(data => this.setState({ post: data}))
    //   .catch(err => {
    //  //    throw new SubmissionError(this.props.errors)
    //    })
  } else {
    this.props.newPost();
  }
  }
  //   submit = (post) => {
 
  //   return this.props.savePost(post)
  //     .then(response => this.setState({ redirect:true }))
  //     .catch(err => {
  //        throw new SubmissionError(this.props.errors)
  //      })
  // }

submit = (post) => {
  if(!post.id) {
   
    let uniqueId =  _.uniqueId('readable_app_');;
    let datetime = Date.now();
    post.id = this.uniqueId();
    post.timestamp = datetime;
    return this.props.savePost(post)
      .then(response => this.setState({ redirect:true }))
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

    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to="/" /> :
          <PostForm categories={this.props.categories} post={this.props.post} onSubmit={this.submit} />
        }
      </div>
    )
  }

}
// Make contacts  array available in  props
function mapStateToProps(state) {
  console.log(state)
  return {
      categories : state.readableStore.categories,
      post: state.readableStore.post,
  }
}


//export default PostFormPage;
export default connect(mapStateToProps, {fetchCategories, newPost, savePost, fetchPost, updatePost})(PostFormPage);