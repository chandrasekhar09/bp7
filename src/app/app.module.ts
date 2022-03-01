import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { CourseDialogComponent } from './course/course-dialog/course-dialog.component';
import { CourseCardListComponent } from './course/course-card-list/course-card-list.component';
import { CreateCourseComponent } from './course/create-course/create-course.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, CourseComponent, CourseDialogComponent, CourseCardListComponent, CreateCourseComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
