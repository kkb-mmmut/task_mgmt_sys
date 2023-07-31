import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { AppRoutingModule } from './app-routing.module';
import { TaskComponent } from './task/task.component'; 
import { AppComponent } from './app.component'; 
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse'; 
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';   
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { InProgressComponent } from './in-progress/in-progress.component';
import { CompletedComponent } from './completed/completed.component';
import { HistoryComponent } from './history/history.component';
import { StoreModule } from '@ngrx/store';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component'; 
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';  
import { MaterialModule } from './Material.module'; 
import { FormsModule,ReactiveFormsModule,RequiredValidator } from '@angular/forms'; 
import { AppState } from './Global/App.State';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({ 
  declarations: [
    AppComponent, 
    TaskComponent, 
    InProgressComponent,
    CompletedComponent,
    HistoryComponent,
    SignUpComponent,
    SignInComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MdbCollapseModule, 
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,   
    MaterialModule, 
    HttpClientModule,
    MdbValidationModule,
    BrowserAnimationsModule, 
    StoreModule.forRoot(AppState) ,
    StoreDevtoolsModule.instrument({maxAge:25,logOnly:isDevMode()}),
    FormsModule,  
    ReactiveFormsModule, 
    BrowserAnimationsModule, EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
