import * as postsModule from "../actions/posts-actions";
import {FETCH_CATEGORIES,  FULFILLED} from "../actions/posts-actions";

const defaultState = {
    categories: [],
    posts:[],
    post: {},
    categoryPosts:[],
    comments:[]
 
};

export default (state=defaultState, action={}) => {
    switch (action.type) {
    case postsModule.FETCH_CATEGORIES + FULFILLED: {
        return {
            ...state,
            categories: action.payload.data.categories
        };
    }

    case postsModule.FETCH_CATEGORYPOSTS + FULFILLED: {
        return {
            ...state,
            categoryPosts: action.payload.data
        };
    }

    case postsModule.FETCH_POSTS + FULFILLED: {
        return {
            ...state,
            posts: action.payload.data
        };
    }
    case postsModule.NEW_POST: {
        return {
            ...state,
            post: {}
        };
    }

    case postsModule.SAVE_POST + FULFILLED: {
        return {
            ...state,
            posts: [...state.posts, action.payload.data],
        };
    }

    case postsModule.FETCH_POST + FULFILLED: {
        return {
            ...state,
            post: action.payload.data
    
        };
    }

    case postsModule.UPDATE_POST + FULFILLED: {
        const post = action.payload.data;
        return {
            ...state,
            posts: state.posts.map(p => p.id === post.id ? post: p)
    
        };
    }

    case postsModule.DELETE_POST + FULFILLED: {
        const id = action.payload.data.id;
        return {
            ...state,
            posts: state.posts.filter(p => p.id !== id)
            //   comments: state.comments.filter(c => c.parentId !== id)
            //  posts: action.payload.data
        };
    }
  

    case postsModule.VOTE_POST + FULFILLED: {
        const post = action.payload.data;
        return {
            ...state,
            posts: state.posts.map(p => p.id === post.id ? post: p),
            post,
            categoryPosts: state.categoryPosts.map(p => p.id === post.id ? post: p)

        };
    }
    
    default:
        return state;
    }
};