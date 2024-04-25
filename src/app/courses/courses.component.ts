import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  //properties
  courses: Course[] = [];
  searchedCourses: Course[] = [];
  searchCourse: string = "";

  constructor(private courseService: CourseService){}

  ngOnInit(){
    this.courseService.getCourses().subscribe((course)=>{
      this.courses = course;
      this.searchedCourses = course;
    });
  }
  //Sökfunktionen
  courseSearch():void{
    this.searchedCourses = this.courses.filter((course)=>
      course.code.toLowerCase().includes(this.searchCourse.toLowerCase()) ||
    course.coursename.toLowerCase().includes(this.searchCourse.toLowerCase())
    );
  }
}
