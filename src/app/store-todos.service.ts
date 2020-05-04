import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreTodosService {
  items = [
    {id: 1, title: 'Тренировка', completed: false, category: 'личные дела', important: false},
    {id: 2, title: 'Купить машину', completed: false, category: 'покупки', important: false},
    {id: 3, title: 'Сделать домашнее задание по JS', completed: false, category: 'личные дела', important: false},
    {id: 4, title: 'Отправить резюме', completed: false, category: 'работа', important: false},
    {id: 5, title: 'Доделать сайт-портфолио', completed: false, category: 'работа', important: false}
  ];

  selectedCategory = null;

  onlyImportant = false;

  getOnlyImportant() {
    return this.onlyImportant;
  }

  toogleOnlyImportant() {
    this.onlyImportant = !this.onlyImportant;
  }

  selectCategory(category) {
    this.selectedCategory = category;
  }
  getItems() {
    let items;
    if (this.onlyImportant) {
      items = this.items.filter(item => item.important);
    }
    else {
      items = this.items;
    }

    if (this.selectedCategory !== null) {
      return items.filter(item => {
        if (item.category === this.selectedCategory) {
          return true;
        }
        return false;
      });
    }
    return items;
  }
  removeTodoItems() {
    this.items = this.items.filter(item => !item.completed);
  }

  getCategories() {
    const categories = [];

    this.items.forEach(item => {
      if (categories.indexOf(item.category) === -1) {
        categories.push(item.category);
      }
    } );
    return categories;
  }

  toogleComplete(id) {
    this.items = this.items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    });
  }
  toogleImportant(id) {
    this.items = this.items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          important: !item.important
        };
      }
      return item;
    });
  }
}
