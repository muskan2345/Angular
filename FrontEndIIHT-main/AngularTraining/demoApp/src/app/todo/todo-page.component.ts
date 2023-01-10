import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTodo,removeTodo  } from '../state/todos/todo.actions';
import { getTodos } from '../state/todos/todo.selectors';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {


  public allTodos$:Observable<Todo[]> =
  this.store.select(getTodos);
  public todo='';
  constructor(private store:Store){}

  ngOnInit(): void {
    console.log('in init')
    this.store.dispatch(loadTodos());

  }
  onSubmit(todoForm:NgForm) {
    const todo = todoForm.form.value.todo;

    console.log('in submit',todo);
      this.store.dispatch(addTodo({ content: todo }));
      this.todo = '';
    }

    removeTodo(todo: Todo) {
      this.store.dispatch(removeTodo({ id: todo.id }));
    }
}
function loadTodos(): any {
  throw new Error('Function not implemented.');
}

