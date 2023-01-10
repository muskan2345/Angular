import { createAction, props } from "@ngrx/store"

import {Todo} from '../../todo/todo.model';

export const addTodo=createAction(

    '[Todo Page] add Todo',
    props<{content:string}>()

)

export const removeTodo=createAction(

    '[Todo Page]  Todo',
    props<{id:string}>()

)
export const loadTodo=createAction(

    '[Todo Page]  load'
  //  props<{id:string}>()

);

export const LoadTodoSuccess=createAction(

    '[Todo API]  Todo load success',
    props<{todos:Todo[]}>()

)
export const LoadTodoFailure=createAction(

    '[Todo API]  Todo load failure',
    props<{error:string}>()

)