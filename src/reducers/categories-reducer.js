const defaultState = {
  categories: [],
  categoryPosts:[]
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

    default:
          return state;
      }
}