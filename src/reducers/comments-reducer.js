const defaultState = {
  comments:[],
  comment:{}
}

export default (state=defaultState, action={}) => {
  switch (action.type) {

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