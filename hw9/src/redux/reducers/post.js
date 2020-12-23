import {
    FETCH_POSTS_ERROR,
    FETCH_POSTS_START,
    FETCH_POSTS_SUCCESS,
    POSTS_ADD,
    POSTS_SET_STATE,
    REMOVE_POSTS
} from "../actions/actonTypes";

const initialState = {
    posts:[],
    loading:false,
    error:null
}

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS_START:
            return {
                ...state, loading: true
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,loading: false, posts: action.posts
            }
        case FETCH_POSTS_ERROR:
            return {
                ...state,loading: false, error: action.error
            }
        case POSTS_ADD:
            return {
                ...state,loading: false, posts: [...state.posts, action.result]
            }
        case POSTS_SET_STATE:
            return {
                ...state,loading: false, posts: [...action.result]
            }
        case REMOVE_POSTS:
            return {
                ...state, posts:state.posts.filter(el => el.key != action.id)
            }

        default:
            return state
    }

}