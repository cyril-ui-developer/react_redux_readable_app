import { _ } from 'underscore'

const defaultState = {
  comments:[],
  comment:{},
  allPostsComments:[]
}

export default (state=defaultState, action={}) => {
  switch (action.type) {

  case 'NEW_POST': {
      return {
        ...state,
        comment: {}
      }
    }
    
  case 'SAVE_COMMENT_FULFILLED': {
      return {
        ...state,
        comments: [...state.comments, action.payload.data]
      }
    }

    case "FETCH_COMMENTS_FULFILLED": {
      return {
        ...state,
        comments: action.payload.data
      }
    }

    // case "FETCH_POSTSCOMMENTS_FULFILLED": {
    //   return {
    //     ...state,
    //      // allPostsComments: [...state.allPostsComments, ...action.payload.data],
    //      allPostsComments: _.uniq([...state.allPostsComments, ...action.payload.data], function(c, id){ return c.id })
          
    //   }
    // }

   case 'FETCH_COMMENT_FULFILLED': {
      return {
        ...state,
        comment: action.payload.data
    
      }
    }

    case 'UPDATE_COMMENT_FULFILLED': {
      const comment = action.payload.data;
      return {
        ...state,
        comments: state.comments.map(c=> c.id === c.id ? comment: c)
      }
    }

    case 'DELETE_COMMENT_FULFILLED': {
    const id = action.payload.data.id;
    return {
      ...state,
      comments: state.comments.filter(c => c.id !== id)
    }
  }


     case 'VOTE_COMMENT_FULFILLED': {
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