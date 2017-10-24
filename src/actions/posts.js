import { client } from './';
import * as postsModule from './posts-actions';

const url_posts = '/posts';


export function fetchPosts(){
  return dispatch => {
    dispatch({
      type: postsModule.FETCH_POSTS,
      payload: client.get(url_posts)
    })
  }
}

export function newPost() {
  return dispatch => {
    dispatch({
      type: postsModule.NEW_POST
    })
  }
}

export function savePost(post) {
  return dispatch => {
    return dispatch({
      type: postsModule.SAVE_POST,
      payload: client.post(url_posts, post)
    })
  }
}

export function fetchPost(id) {
  return dispatch => {
    return dispatch({
      type: postsModule.FETCH_POST,
      payload: client.get(`${url_posts}/${id}`)
    })
  }
}

export function updatePost(post) {
  return dispatch => {
    return dispatch({
      type: postsModule.UPDATE_POST,
      payload: client.put(`${url_posts}/${post.id}`, post)
    })
  }
}

export function fetchCategoryPosts(cat) {
  return dispatch => {
    return dispatch({
      type: postsModule.FETCH_CATEGORYPOSTS,
      payload: client.get(`${cat}${url_posts}`)
    })
  }
}


export function deletePost(id) {
  const obj = {deleted:true, parentDeleted:true}
  return dispatch => {
    return dispatch({
      type: postsModule.DELETE_POST,
      payload: client.delete(`${url_posts}/${id}`, obj)
    })
  }
}

  export function votePost(postId, vote) {
   const reqObj ={option: vote} 
  return dispatch => {
    return dispatch({
      type: postsModule.VOTE_POST,
      payload: client.post(`${url_posts}/${postId}`, reqObj)
    })
  }
}

// export function fetchComments(id){
//   return dispatch => {
//     dispatch({
//       type: postsModule.FETCH_COMMENTS,
//       payload: client.get(`${url_posts}/${id}/comments`)
//     })
//   }
// }