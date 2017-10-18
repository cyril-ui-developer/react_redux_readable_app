import { client } from './';

const url_categories = '/categories';

export function fetchCategories(){
  return dispatch => {
    dispatch({
      type: 'FETCH_CATEGORIES',
      payload: client.get(url_categories)
    })
  }
}

