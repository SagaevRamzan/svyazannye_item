import {TODOS_DELETE, TODOS_LOAD_START, TODOS_LOAD_SUCCESS, USERS_LOAD_START} from "../Constants/constant";

export const loadTodos=()=>{
    return function (dispatch){
        dispatch({
            type:"TODOS_LOAD_START"
        })

        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(response=>response.json())
            .then(json=> {
                dispatch({
                    type: "TODOS_LOAD_SUCCESS",
                    payload: json
                })
            } )
    }

}
export const deleteTodos=(id)=>{
    return function (dispatch){

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response=>response.json())
            .then(json=>
                dispatch({
                    type:"TODOS_DELETE",
                    payload:id
                })
            )
    }
}
export const loadUsers=()=>{
    return function (dispatch){
        dispatch({
            type:"USERS_LOAD_START",
        })
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response=>response.json())
            .then(json=>
            dispatch({
                type:"USERS_LOAD_SUCCESS",
                payload:json
            })
            )
    }
}