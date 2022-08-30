import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


import {Course} from '../model/course';

 @Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

// creating member variable and adding input decorator so angular knows
// that this is an input property of the course card element


@Input()
//imports object entirely
course: Course;

//need to define event emitter here to emit data to top level of app, data captured via bubbling
@Output()
courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  //this is a method for the button that fires on click
  onCourseViewed() {
console.log('card button clicked');

this.courseSelected.emit(this.course);
  }

}



// data originated from db-data.ts
