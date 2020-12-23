import {deleteQuery, getQuery, postQuery, putQuery} from "../../axios/backend";
import {
    FETCH_POSTS_ERROR,
    FETCH_POSTS_START,
    FETCH_POSTS_SUCCESS,
    POSTS_ADD,
    POSTS_SET_STATE,
    REMOVE_POSTS
} from "./actonTypes";

export function fetchPosts() {
    return async dispatch => {
        dispatch(fetchPostsStart());
        try{
            const result = await getQuery();
            const posts = result.data.thoughts;
            dispatch(fetchPostsSuccess(posts));
        }catch (e) {
            dispatch(fetchPostsError(e))
        }
    }
}

export function fetchPostsStart() {
    return{
        type: FETCH_POSTS_START
    }
}

export function fetchPostsSuccess(posts) {
    return{
        type: FETCH_POSTS_SUCCESS,
        posts
    }
}

export function fetchPostsError(e) {
    return{
        type: FETCH_POSTS_ERROR,
        error: e
    }
}

export function addPostsState(result) {
    return{
        type: POSTS_ADD,
        result
    }
}

export const addPost = (post) => {
    return async (dispatch, getState) =>{
        const state = getState().post.posts;

        try{
            await postQuery(post);
        }catch (e) {
            dispatch(fetchPostsError(e))
        }

        const newId = state.length !== 0 ? state[state.length-1].key : 0;
        const newPost = {
            key: newId + 1,
            value: post,
            liked: false,
            favorite: false,
            lastEditted: Date.now()
        }

        dispatch(addPostsState(newPost))
    }
}

export const changePost = (id,str,value) => {
    return async (dispatch, getState) =>{
        const state = getState().post.posts;

        const changed = state.map(el => {
            if(el.key == id){
                if(str == "liked") return el.liked = value;
                if(str == "favorite") return el.favorite = value;
                if(str == "value") return el.value = value;
            }
        })

        try{
            if(str == "liked") await putQuery(id,{liked:changed.liked.toString()});
            if(str == "favorite") await putQuery(id,{favorite:changed.favorite.toString()});
            if(str == "value") await putQuery(id,{value:changed.value.toString()});
        }catch (e) {
            dispatch(fetchPostsError(e));
        }

        dispatch(changePostsState(state));
    }
}

export function changePostsState(result) {
    return{
        type: POSTS_SET_STATE,
        result
    }
}

export const deletePost = (id) => {
    return async (dispatch, getState) =>{
        const state = getState().post.posts;

        try{
            await deleteQuery(id);
        }catch (e) {
            dispatch(fetchPostsError(e));
        }

        dispatch(deleteActions(id));
    }
}

const deleteActions = (id) =>{
    return{
        type: REMOVE_POSTS,
        id
    }
}



