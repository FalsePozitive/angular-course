import { Component, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
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


// view child decorator allows a programmatic reference. allows direct access at component level instead of template like ng-template
@ViewChild(CourseCardComponent) //need to name the component you need access to
card: CourseCardComponent //set var



// method logs object and appends course object
onCourseSelected(course:Course) {
  console.log(this.card);
  console.log("App component is clicked", course);
}

}

