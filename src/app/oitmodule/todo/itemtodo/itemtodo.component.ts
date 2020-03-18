import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ItemTodoModel } from './itemtodo.model';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-itemtodo',
  templateUrl: './itemtodo.component.html',
  styleUrls: ['./itemtodo.component.css']
})
export class ItemtodoComponent implements OnInit {

  @Input('itemTodo') itemTodo: ItemTodoModel;
  faTrash = faTrash;
  constructor() { }

  ngOnInit(): void {
  }
  
  toggle() {
    this.itemTodo.isChecked = !this.itemTodo.isChecked;
  }
  
  delete() {
    this.itemTodo.deleted = !this.itemTodo.deleted;
  }

  focusout(val: any) {
    this.itemTodo.label = val.innerText;
  }

  edit(event: any) {
    console.log(event);
    // event.target.focus();
  }

  inputLabel(){
    debugger;
  }

}
