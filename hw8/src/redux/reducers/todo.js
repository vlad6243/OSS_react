import {FETCH_TODOS_ERROR, FETCH_TODOS_START, FETCH_TODOS_SUCCESS} from "../actions/actionsType";

const initialState = {
    todos:[],
    loading:false,
    error:null
}

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TODOS_START:
            return {
                ...state, loading: true
            }
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,loading: false, todos: action.todo
            }
        case FETCH_TODOS_ERROR:
            return {
                ...state,loading: false, error: action.error
            }
        default:
            return state
    }

}