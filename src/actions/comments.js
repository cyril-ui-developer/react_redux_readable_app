import { client } from './';

const url_comments = '/comments';


// export function fetchPostsComments(id){
//   return dispatch => {
//     dispatch({
//       type: 'FETCH_POSTSCOMMENTS',
//       payload: client.get(`${url_posts}/${id}/comments`)
//     })
//   }
// }

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

export function deleteComment(id) {
  const obj = {deleted:true}
  return dispatch => {
    return dispatch({
      type: 'DELETE_COMMENT',
      payload: client.delete(`${url_comments}/${id}`, obj)
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