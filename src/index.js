import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {TODOS_LOAD_START, TODOS_LOAD_SUCCESS, TODOS_DELETE, USERS_LOAD_START} from "./Constants/constant";
import thunk from "redux-thunk";

const initialState={
   todos: [],
   users:[],
   loading:false,
    user_loading:false
}
const reducer=(state=initialState,action)=>{

   switch(action.type) {
       case `TODOS_LOAD_START`:
       return {
           ...state,
           loading: true
       }
       case `TODOS_LOAD_SUCCESS`:
           return {
               ...state,
               todos: action.payload,
               loading: false

           }
       case `TODOS_DELETE`:
           return {
               ...state,
               todos: state.todos.filter(todo=>{
                   if(todo.id===action.payload){
                       return false
                   }
                   return true
               })

           }
       case `USERS_LOAD_START`:
           return {
               ...state,
               user_loading:true
           }
       case `USERS_LOAD_SUCCESS`:
           return {
               ...state,
               users: action.payload,
               user_loading: true

           }
       default: return  state
   }

}
const store=createStore(reducer, applyMiddleware(thunk))
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
            <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


