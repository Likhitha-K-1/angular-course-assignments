import { Task9NotfoundComponent } from './task9-notfound/task9-notfound.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { Task4Component } from './task4/task4.component';
import { Task5Component } from './task5/task5.component';
import { Task6Component } from './task6/task6.component';
import { Task9ArchiveComponent } from './task9-archive/task9-archive.component';
import { Task9Component } from './task9/task9.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    Task4Component,
    Task5Component,
    Task6Component,
    Task9Component,
    AllTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path : '', component : AllTasksComponent},
      {path : 'archive/:year/:month', component: Task9ArchiveComponent},
      {path : 'archive', component: Task9Component},
      {path : '**', component: Task9NotfoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
