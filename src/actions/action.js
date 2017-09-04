import { client } from './';

const url = '/categories';
const urlPosts = '/posts';
const urlCatPosts = '/posts';
const urlPostDetails = '/posts';

export function fetchCategories(){
  return dispatch => {
    dispatch({
      type: 'FETCH_CATEGORIES',
      payload: client.get(url)
    })
  }
}

export function fetchPosts(){
  return dispatch => {
    dispatch({
      type: 'FETCH_POSTS',
      payload: client.get(urlPosts)
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
      payload: client.post(urlPosts, post)
    })
  }
}

export function fetchPost(id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_POST',
      payload: client.get(`${urlPosts}/${id}`)
    })
  }
}

export function updatePost(post) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_POST',
      payload: client.put(`${urlPosts}/${post.id}`, post)
    })
  }
}

export function fetchCategoryPosts(cat) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_CATEGORYPOSTS',
      payload: client.get(`${cat}${urlCatPosts}`)
    })
  }
}

export function fetchPostDetails(id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_POSTDETAILS',
      payload: client.get(`${urlPostDetails}/${id}`)
    })
  }
}