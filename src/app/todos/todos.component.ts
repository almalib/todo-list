import {Component, OnInit, ViewChild} from '@angular/core';
import {StoreTodosService} from '../store-todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  /**
   *
   */

  constructor(
    private storeTodos: StoreTodosService
  ) { }

  ngOnInit(): void {
  }

  public toggleCompleted(id) {
    this.storeTodos.toggleComplete(id);
  }

  public toggleImportant(id) {
    this.storeTodos.toggleImportant(id);
  }

  public getItems() {
    return this.storeTodos.getItems();
  }

  public removeTodoItems() {
    this.storeTodos.removeTodoItems();
  }
  public toggleOnlyImportant() {
    this.storeTodos.toggleOnlyImportant();
  }

  public isOnlyImportant() {
    return this.storeTodos.onlyImportant;
  }

  /**
   *
   */
  addItem(newItem, itemCategory) {
    const selectCategory = document.getElementById('selectCategory');
    const text = document.getElementById('text');
    const newId = this.getItems().length + 1;
    const item = {
      id: newId,
      title: newItem,
      category: itemCategory,
      completed: false,
      important: false,
    };
    if (newItem !== '' && itemCategory !== 'Выбери категорию') {
      this.getItems().push(item);
      selectCategory.classList.remove('error');
      text.classList.remove('error');
    }
    else if (newItem === '' && itemCategory === 'Выбери категорию') {
      selectCategory.classList.add('error');
      text.classList.add('error');

    }
  }

}
