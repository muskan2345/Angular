

import {addTodo,removeTodo,loadTodo,LoadTodoSuccess,LoadTodoFailure} from './todo.actions';

import {Todo} from '../../todo/todo.model';
import { createReducer, on } from '@ngrx/store';
// import {initialState } from './todo.state';
 



export interface TodoState{

    todos:Todo[];
    error:string;
    status:'pending' |'loading' |'success';



}

export const initialState:TodoState={


    todos:[],
    error:'',
    status:'pending'
}


export const todoReducer=createReducer(

   

    initialState,
on(addTodo,(state,{content})=>({

    ...state,
    todos:[...state.todos,{id:Date.now().toString(),content:content}],
})),

on(removeTodo,(state,{id})=>({
  ...state,
  todos:state.todos.filter((todo)=>todo.id !== id),
})),

on(loadTodo,(state)=>({
  ...state,
  status:'loading'
})),

on(LoadTodoSuccess,(state , {todos})=>({
  ...state,
  todos,
  error:'',
  status:'success'
})) ,

on(LoadTodoFailure,(state,{error})=>({
...state,
error:error,
status:'pending'

}))




)