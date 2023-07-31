import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodosModal,Todos } from './shared/store/todos.modal';
import { gettodos } from './shared/store/todos.selectors';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{ 
  constructor(private store: Store<{ todos: TodosModal }>) {
  }
    title = 'task-mgmt-sys';
    user_login=false; 
    runningtask=0;
    todoslist !: TodosModal[];

    ngOnInit(): void {  
      this.store.select(gettodos).subscribe((data) => {
        if(data){
          this.todoslist = data.filter((item) => !item.isCompleted);
        }  
        this.runningtask=data.length;
      }); 
    }
}
