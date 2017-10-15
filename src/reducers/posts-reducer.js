const defaultState = {
  categories: [],
  posts:[],
  post: {},
  categoryPosts:[],
  comments:[]
 
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case "FETCH_CATEGORIES_FULFILLED": {
      return {
        ...state,
        categories: action.payload.data.categories
      }
    }

    case 'FETCH_CATEGORYPOSTS_FULFILLED': {
      return {
        ...state,
        categoryPosts: action.payload.data
      }
    }
    // case "FETCH_COMMENTS_FULFILLED": {
    //   return {
    //     ...state,
    //     comments: action.payload.data
    //   }
    // }
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
      }
    }

    case 'FETCH_POST_FULFILLED': {
      return {
        ...state,
        post: action.payload.data
    
      }
    }

    case 'UPDATE_POST_FULFILLED': {
      const post = action.payload.data;
      return {
        ...state,
        posts: state.posts.map(p => p.id === post.id ? post: p)
    
      }
    }

  
  // case 'NEW_POST': {
  //     return {
  //       ...state,
  //       comment: {}
  //     }
  //   }
  

    case 'DELETE_POST_FULFILLED': {
      const id = action.payload.data.id;
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== id)
     //   comments: state.comments.filter(c => c.parentId !== id)
      //  posts: action.payload.data
      }
    }
  

    case 'VOTE_POST_FULFILLED': {
      const post = action.payload.data;
      return {
        ...state,
       posts: state.posts.map(p => p.id === post.id ? post: p),
       post:  post,
       categoryPosts: state.categoryPosts.map(p => p.id === post.id ? post: p)

      }
    }
    
        default:
          return state;
      }
}