const defaultState = {
  categories: [],
  posts:[],
  post: {},
  categoryPosts:[],
  postDetails:{},
  loading: false,
  errors: {},
  comments:[],
  comment:{}
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case "FETCH_CATEGORIES_FULFILLED": {
      return {
        ...state,
        categories: action.payload.data.categories
      }
    }
   case "FETCH_POSTS_FULFILLED": {
      return {
        ...state,
        posts: action.payload.data
      }
    }
    case 'NEW_POST': {
      return {
        ...state,
        post: {}
      }
    }


    case 'SAVE_POST_FULFILLED': {
      return {
        ...state,
        posts: [...state.posts, action.payload.data],
        errors: {},
        loading: false
      }
    }

    case 'FETCH_POST_FULFILLED': {
      return {
        ...state,
        post: action.payload.data
    
      }
    }
    // case 'UPDATE_POST_FULFILLED': {
    //   const post = action.payload.data;
    //   return {
    //     ...state,
    //     posts: state.posts.map(p => p.id === post.id ? post: p),
    //     errors: {},
    //     loading: false
    //   }
    // }

    case 'UPDATE_POST_FULFILLED': {
      const post = action.payload.data;
      return {
        ...state,
        posts: state.posts.map(p => p.id === post.id ? post: p),
        errors: {},
        loading: false
      }
    }

    case 'FETCH_CATEGORYPOSTS_FULFILLED': {
      return {
        ...state,
        categoryPosts: action.payload.data,
        errors: {},
        loading: false
      }
    }

  case 'SAVE_COMMENT_FULFILLED': {
      return {
        ...state,
        comments: [...state.comments, action.payload.data],
        errors: {},
        loading: false
      }
    }

    case "FETCH_COMMENTS_FULFILLED": {
      return {
        ...state,
        comments: action.payload.data
      }
    }
  case 'NEW_POST': {
      return {
        ...state,
        comment: {}
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
        comments: state.comments.map(c=> c.id === c.id ? comment: c),
        errors: {},
        loading: false
      }
    }

  case 'DELETE_POST_FULFILLED': {
    const id = action.payload.data.id;
    return {
      ...state,
      posts: state.posts.filter(p => p.id !== id),
      comments: state.comments.filter(c => c.parentId !== id)
    }
  }
  case 'DELETE_COMMENT_FULFILLED': {
    const id = action.payload.data.id;
    return {
      ...state,
      comments: state.comments.filter(c => c.id !== id)
    }
  }
  

     case 'VOTE_POST_FULFILLED': {
      const post = action.payload.data;
      return {
        ...state,
       posts: state.posts.map(p => p.id === post.id ? post: p),
       post:  post,
       categoryPosts: state.categoryPosts.map(p => p.id === post.id ? post: p),
        errors: {},
        loading: false
      }
    }
     case 'VOTE_COMMENT_FULFILLED': {
      const comment = action.payload.data;
      return {
        ...state,
        comments: state.comments.map(c => c.id === comment.id ? comment: c),
        errors: {},
        loading: false
      }
    }
        default:
          return state;
      }
}