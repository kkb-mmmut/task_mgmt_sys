import { Component,OnInit } from '@angular/core'; 
import { Store } from '@ngrx/store';
import { TodosModal,Todos } from '../shared/store/todos.modal';
import { gettodos } from '../shared/store/todos.selectors';
import { addtodos, deletetodos, loadtodos, completetodos } from '../shared/store/todos.actions';
import { MatDialog } from '@angular/material/dialog'; 
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AppStateModel } from '../Global/AppState.Model';
import { AddTaskListComponent } from '../add-task-list/add-task-list.component';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],  
})
export class TaskComponent implements OnInit{ 
  constructor(private store: Store<AppStateModel>,private dialog: MatDialog) {
  }

  total_task=0;
  remaining_task=0;
  completed_task=0;
  todoslist !: TodosModal[];
 
   ngOnInit(): void {
     this.store.select(gettodos).subscribe((data) => {
       if(data){
         this.todoslist = data;
       }  
       this.total_task=data.length;
     });  
     this.remaining_task= this.todoslist.filter((item) => !item.isCompleted).length;
     this.completed_task= this.total_task-this.remaining_task; 
   }
  AddTodos(){
    this.OpenPopup(0,'Add Todos',false);
  }

  EditTodos(id:any){
     this.OpenPopup(id,'Edit Todos',true);
  }
  CompleteTodos(id:any){ 
     this.store.dispatch(completetodos({id:id}));
  }
  DeleteTodos(id:any){
     if(confirm('Are you sure to delete this record ?')){
      this.store.dispatch(deletetodos({id:id}));
     }
 } 
  OpenPopup(id?:any,title?:any,isedit?:any){
    this.dialog.open(AddTaskListComponent,{
      width:'35%',  
      data:{
        id:id,
        title:title,
        isedit:isedit,
      }
    })
  }
}

// Path: client\src\app\shared\store\todos.actions.ts 
// Compare this snippet from client\src\app\shared\store\todos.actions.ts:
// import { createAction, props } from "@ngrx/store";
// import { TodosModal } from "./todos.modal";
//
// export const LOAD_TODOS_SUCCESS='[todos page] load todos success';
// export const LOAD_TODOS_FAIL='[todos page] load todos fail';
// export const LOAD_TODOS='[todos page] load todos';
// export const ADD_TODOS_SUCCESS='[todos page] add todos success';
// export const ADD_TODOS='[todos page] add todos';
// export const UPDATE_TODOS='[todos page] update todos';
// export const UPDATE_TODOS_SUCCESS='[todos page] update todos success';
// export const DELETE_TODOS='[todos page] delete todos';
// export const DELETE_TODOS_SUCCESS='[todos page] delete todos success';
//
// export const loadtodos=createAction(LOAD_TODOS);
//

// export const loadtodossuccess=createAction(LOAD_TODOS_SUCCESS,props<{bloglist:TodosModal[]}>())
//
// export const loadtodosfail=createAction(LOAD_TODOS_FAIL,props<{Errortext:any}>())
//
// export const addtodos=createAction(ADD_TODOS,props<{bloginput:TodosModal}>());
//
// export const addtodossuccess=createAction(ADD_TODOS_SUCCESS,props<{bloginput:TodosModal}>());

