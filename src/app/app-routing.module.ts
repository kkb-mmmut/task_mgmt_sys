import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskComponent} from './task/task.component';  
import {CompletedComponent} from './completed/completed.component';
import {InProgressComponent} from './in-progress/in-progress.component';
import { HistoryComponent } from './history/history.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: 'task-mgmt-sys', component: TaskComponent}, 
  { path: 'task-mgmt-sys/in-progress',component:InProgressComponent},
  { path: 'task-mgmt-sys/completed', component: CompletedComponent},
  { path: 'task-mgmt-sys/history', component:HistoryComponent},
  {path: 'task-mgmt-sys/sign-up', component:SignUpComponent},
  {path: 'task-mgmt-sys/sign-in', component:SignInComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
