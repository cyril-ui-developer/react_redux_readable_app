import { client } from './';

const url_categories = '/categories';
const url_posts = '/posts';
const url_comments = '/comments';

export function fetchCategories(){
  return dispatch => {
    dispatch({
      type: 'FETCH_CATEGORIES',
      payload: client.get(url_categories)
    })
  }
}

export function fetchPosts(){
  return dispatch => {
    dispatch({
      type: 'FETCH_POSTS',
      payload: client.get(url_posts)
    })
  }
}

export function newPost() {
  return dispatch => {
    dispatch({
      type: 'NEW_POST'
    })
  }
}

export function savePost(post) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_POST',
      payload: client.post(url_posts, post)
    })
  }
}

export function fetchPost(id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_POST',
      payload: client.get(`${url_posts}/${id}`)
    })
  }
}

export function updatePost(post) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_POST',
      payload: client.put(`${url_posts}/${post.id}`, post)
    })
  }
}

export function fetchCategoryPosts(cat) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_CATEGORYPOSTS',
      payload: client.get(`${cat}${url_posts}`)
    })
  }
}

export function fetchComments(id){
  return dispatch => {
    dispatch({
      type: 'FETCH_COMMENTS',
      payload: client.get(`${url_posts}/${id}/comments`)
    })
  }
}

export function fetchPostsComments(id){
  return dispatch => {
    dispatch({
      type: 'FETCH_POSTSCOMMENTS',
      payload: client.get(`${url_posts}/${id}/comments`)
    })
  }
}

export function newComment() {
  return dispatch => {
    dispatch({
      type: 'NEW_COMMENT'
    })
  }
}

export function saveComment(comment) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_COMMENT',
      payload: client.post(`${url_comments}`, comment)
    })
  }
}

export function fetchComment(id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_COMMENT',
      payload: client.get(`${url_comments}/${id}`)
    })
  }
}

export function updateComment(comment) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_COMMENT',
      payload: client.put(`${url_comments}/${comment.id}`, comment)
    })
  }
}

export function deletePost(id) {
  const obj = {deleted:true, parentDeleted:true}
  return dispatch => {
    return dispatch({
      type: 'DELETE_POST',
      payload: client.delete(`${url_posts}/${id}`, obj)
    })
  }
}

export function deleteComment(id) {
  const obj = {deleted:true}
  return dispatch => {
    return dispatch({
      type: 'DELETE_COMMENT',
      payload: client.delete(`${url_comments}/${id}`, obj)
    })
  }
}

  export function votePost(postId, vote) {
   const reqObj ={option: vote} 
  return dispatch => {
    return dispatch({
      type: 'VOTE_POST',
      payload: client.post(`${url_posts}/${postId}`, reqObj)
    })
  }
}
 export function voteComment(commentId, vote) {
   const reqObj ={option: vote} 
  return dispatch => {
    return dispatch({
      type: 'VOTE_COMMENT',
      payload: client.post(`${url_comments}/${commentId}`, reqObj)
    })
  }
 }