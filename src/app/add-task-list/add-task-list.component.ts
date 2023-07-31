import { Component,OnInit,Inject} from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select'; 
import { TodosModal } from '../shared/store/todos.modal';
import { AppStateModel } from '../Global/AppState.Model';
import { addtodos, updatetodos } from '../shared/store/todos.actions'; 
import { gettodosbyid } from '../shared/store/todos.selectors';
import { MatCardModule } from '@angular/material/card'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task-list',
  templateUrl: './add-task-list.component.html',
  styleUrls: ['./add-task-list.component.scss'], 
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MatSelectModule,MatCardModule], 
})
export class AddTaskListComponent {
  pagetitle = 'Add Todos';
  edittodosid = 0;
  editdata!: TodosModal; 
  constructor(private dialogref: MatDialogRef<AddTaskListComponent>, private  builder: FormBuilder,
    private store: Store<AppStateModel>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  ngOnInit(): void {
    this.pagetitle = this.data.title;
    console.warn('data', this.data);
    
    if (this.data.isedit) {
      this.edittodosid = this.data.id;
      this.store.select(gettodosbyid(this.edittodosid)).subscribe(_data => {
        this.editdata = _data;
        this.todosform.setValue({id:this.editdata.id,responsible:this.editdata.responsible,desc:this.editdata.desc,priority:this.editdata.priority,isCompleted:this.editdata.isCompleted});
      });
    }
  }

  closepopup() {
    this.dialogref.close();
  }

  todosform = this.builder.group({
    id: this.builder.control(0),
    responsible: this.builder.control('', Validators.required),
    desc: this.builder.control('', Validators.required),
    priority: this.builder.control('', Validators.required),
    isCompleted: this.builder.control(false)

  })

  SaveTodos() {
    console.log(this.todosform.value);
    if (this.todosform.valid) {
      const _todosinput: TodosModal = {
        id: 0,
        responsible: this.todosform.value.responsible as string,
        desc: this.todosform.value.desc as string,
        priority:this.todosform.value.priority as string,
        isCompleted: false
      }  

      // this.store.dispatch(loadspinner({ isloaded: true }));
      // setTimeout(() => {
        if(this.data.isedit){
          _todosinput.id=this.todosform.value.id as number;
          this.store.dispatch(updatetodos({ todosinput: _todosinput }))
        }else{
        this.store.dispatch(addtodos({ todosinput: _todosinput }))
        console.log(_todosinput);
        }
        this.closepopup();
      // }, 2000);

     
    }
  }
}
