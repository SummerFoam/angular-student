import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';
import { AppRoutingModule } from './app-routing.module';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { from } from 'rxjs/internal/observable/from';

@NgModule({
  declarations: [ 
    AppComponent,
    StudentsComponent,
    UpdateStudentComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
