import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToDoService } from '../../todo/todo.service';
import { catchError, from, map, mergeMap, of, switchMap, withLatestFrom } from 'rxjs';
import {addTodo,removeTodo,loadTodo,LoadTodoSuccess,LoadTodoFailure} from './todo.actions';
import {Store} from '@ngrx/store';
@Injectable()

export class TodoEffects{


constructor(private actions$:Actions,private todoService:ToDoService){}
//when the loadtodos action is dispatched .,, this effect is run

loadTodos$= createEffect(()=>{
let err1 : string | any;
  return this.actions$
  .pipe(
    ofType(loadTodo),
    //calls the service gettodos
    mergeMap(()=>this.todoService.getTodos()
    //taking the returned value ,returns a new success action which contains the todos
    .pipe(map(todos=>LoadTodoSuccess({todos})),
    catchError(error=>of(LoadTodoFailure({ error })))
    ))
  )



});


// saveTodos$ = createEffect(
//   () =>
//     this.actions$.pipe(
//       ofType(addTodo, removeTodo),
//       withLatestFrom(this.store.select(getTodos())),
//       switchMap(([action, todos]) => from(this.todoService.createTodo(todos[0])))
//     ),
//   // Most effects dispatch another action, but this one is just a "fire and forget" effect
//   { dispatch: false }
// );
}