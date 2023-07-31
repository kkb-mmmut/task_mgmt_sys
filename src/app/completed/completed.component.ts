 
import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodosModal,Todos } from '../shared/store/todos.modal';
import { gettodos } from '../shared/store/todos.selectors';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit{ 
  constructor(private store: Store<{ todos: TodosModal }>) {
  }

  total_task=0;
  remaining_task=0;
  completed_task=0;
  todoslist !: TodosModal[];
 
   ngOnInit(): void {
     this.store.select(gettodos).subscribe((data) => {
       if(data){
         this.todoslist = data.filter((item) =>item.isCompleted);
       }  
       this.total_task=data.length;
       this.remaining_task= data.filter((item) => !item.isCompleted).length;
     });   
     this.completed_task= this.total_task-this.remaining_task;
   }
}
