import { Component, OnInit } from '@angular/core';
import { ItemTodoModel } from './itemtodo/itemtodo.model';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  dataItemTodo = [];
  constructor() {
    this.dataItemTodo.push(new ItemTodoModel(false, 'abc', false));
  }

  ngOnInit(): void {

  }

  addItem(e, element) {
    e.preventDefault();
    this.dataItemTodo.push(new ItemTodoModel(false, element.value, false));
    element.value = "";
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }
}
