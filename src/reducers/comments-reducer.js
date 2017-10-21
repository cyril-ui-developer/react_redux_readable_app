//import { _ } from 'underscore'
import * as commentsModule from '../actions/comments-actions';
import { FULFILLED} from '../actions/comments-actions';

const defaultState = {
  comments:[],
  comment:{},
  allPostsComments:[]
}

export default (state=defaultState, action={}) => {
  switch (action.type) {

  case commentsModule.NEW_COMMENT: {
      return {
        ...state,
        comment: {}
      }
    }
    
  case commentsModule.SAVE_COMMENT+FULFILLED: {
      return {
        ...state,
        comments: [...state.comments, action.payload.data]
      }
    }


   case commentsModule.FETCH_COMMENT+FULFILLED: {
      return {
        ...state,
        comment: action.payload.data
    
      }
    }

    case commentsModule.UPDATE_COMMENT+FULFILLED: {
      const comment = action.payload.data;
      return {
        ...state,
        comments: state.comments.map(c=> c.id === c.id ? comment: c)
      }
    }

    case commentsModule.DELETE_COMMENT+FULFILLED: {
    const id = action.payload.data.id;
    return {
      ...state,
      comments: state.comments.filter(c => c.id !== id)
    }
  }


     case commentsModule.VOTE_COMMENT+FULFILLED: {
      const comment = action.payload.data;
      return {
        ...state,
        comments: state.comments.map(c => c.id === comment.id ? comment: c)
 
      }
    }
        default:
          return state;
      }
}