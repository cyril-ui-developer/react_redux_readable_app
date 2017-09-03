const defaultState = {
  categories: [],
  posts:[],
  post: {},
  loading: false,
  errors: {}
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

    case 'SAVE_POST_PENDING': {
      return {
        ...state,
        loading: true
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

case 'FETCH_POST_PENDING': {
  return {
    ...state,
    loading: true,
    post: {}
  }
}

case 'FETCH_POST_FULFILLED': {
  return {
    ...state,
    post: action.payload.data,
    errors: {},
    loading: false
  }
}

case 'UPDATE_POST_PENDING': {
  return {
    ...state,
    loading: true
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

    default:
      return state;
  }
}