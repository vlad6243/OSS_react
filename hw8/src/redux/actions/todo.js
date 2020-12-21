import getQuery from "../../axios/axios-backend";
import {GET_TODOS_URL} from "../../axios/query";
import {FETCH_TODOS_ERROR, FETCH_TODOS_START, FETCH_TODOS_SUCCESS} from "./actionsType";

export function fetchTodos() {
    return async dispatch => {
        dispatch(fetchTodosStart());
        try{
            const result = await getQuery(GET_TODOS_URL);
            const todos = result.data;
            dispatch(fetchTodosSuccess(todos));
        }catch (e) {
            dispatch(fetchTodosError(e))
        }

    }
}

export function fetchTodosStart() {
    return{
        type: FETCH_TODOS_START
    }
}

export function fetchTodosSuccess(todo) {
    return{
        type: FETCH_TODOS_SUCCESS,
        todo
    }
}

export function fetchTodosError(e) {
    return{
        type: FETCH_TODOS_ERROR,
        error: e
    }
}