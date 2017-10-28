import { client } from "./";
import * as commentsModule from "./comments-actions";

const url_comments = "/comments";
const url_posts = "/posts";

export function newComment() {
    return dispatch => {
        dispatch({
            type: commentsModule.NEW_COMMENT
        });
    };
}

export function saveComment(comment) {
    return dispatch => {
        return dispatch({
            type: commentsModule.SAVE_COMMENT,
            payload: client.post(`${url_comments}`, comment)
        });
    };
}

export function fetchComment(id) {
    return dispatch => {
        return dispatch({
            type: commentsModule.FETCH_COMMENT,
            payload: client.get(`${url_comments}/${id}`)
        });
    };
}

export function updateComment(comment) {
    return dispatch => {
        return dispatch({
            type: commentsModule.UPDATE_COMMENT,
            payload: client.put(`${url_comments}/${comment.id}`, comment)
        });
    };
}

export function deleteComment(id) {
    const obj = {deleted:true}
    return dispatch => {
        return dispatch({
            type: commentsModule.DELETE_COMMENT,
            payload: client.delete(`${url_comments}/${id}`, obj)
        });
    };
}

export function voteComment(commentId, vote) {
    const reqObj ={option: vote} 
    return dispatch => {
        return dispatch({
            type: commentsModule.VOTE_COMMENT,
            payload: client.post(`${url_comments}/${commentId}`, reqObj)
        });
    };
}

export function fetchComments(id){
    return dispatch => {
        dispatch({
            type: commentsModule.FETCH_COMMENTS,
            payload: client.get(`${url_posts}/${id}/comments`)
        });
    };
}