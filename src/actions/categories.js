import { client } from "./";
import * as postsModule from "./posts-actions";

const url_categories = "/categories";

export function fetchCategories(){
    return dispatch => {
        dispatch({
            type: postsModule.FETCH_CATEGORIES,
            payload: client.get(url_categories)
        });
    };
}


