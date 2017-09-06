const defaultState = {
  categories: [],
  posts:[],
  post: {},
  categoryPosts:[],
  postDetails:{},
  loading: false,
  errors: {},
  comments:[],
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


    case 'UPDATE_POST_FULFILLED': {
      const post = action.payload.data;
      return {
        ...state,
        posts: state.posts.map(item => item.id === post.id ? post: item),
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

        default:
          return state;
      }
}