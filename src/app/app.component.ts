import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  courses = COURSES;
// //defining member variables to expose data to components and app
// coreCourse = COURSES[0];

// rxjsCourse = COURSES[1];
// // bracketed number is the key to objects position in array found db-data.ts
// ngrxCourse = COURSES[2];
title = COURSES[0].description;

price = 9.993453465;

rate = 0.67;

course= COURSES[0];

startDate = new Date(2000, 0, 1) ;
// method logs object and appends course object
onCourseSelected(course:Course) {
  console.log("App component is clicked", course);
}

}
