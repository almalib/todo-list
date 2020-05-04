import { Component, OnInit } from '@angular/core';
import {StoreTodosService} from '../store-todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(
    private storeTodos: StoreTodosService
  ) { }

  toogleCompleted(id) {
    this.storeTodos.toogleComplete(id);
  }

  toogleImportant(id) {
    this.storeTodos.toogleImportant(id);
  }

  getItems() {
    return this.storeTodos.getItems();
  }

  removeTodoItems() {
    this.storeTodos.removeTodoItems();
  }
  toogleOnlyImportant() {
    this.storeTodos.toogleOnlyImportant();
  }

  isOnlyImportant() {
    return this.storeTodos.onlyImportant;
  }

  ngOnInit(): void {
  }

}
