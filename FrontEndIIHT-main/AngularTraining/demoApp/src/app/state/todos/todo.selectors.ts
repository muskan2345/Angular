import { createSelector } from "@ngrx/store";
import { createFeatureSelector } from "@ngrx/store";
import * as AppState from "../app.state";
import { TodoState } from "./todo.reducers";

// export const selectTodos =  (state:AppState)=> state.todos;
// export const selectAllTodos:any = createSelector(
//   selectTodos,
//   (state:TodoState)=>state.todos

// )

// export const todosDataState =  createFeatureSelector('todos');




export const todosDataState =  createFeatureSelector<TodoState>('todos');

export const getTodos =createSelector(todosDataState,state=>state.todos);