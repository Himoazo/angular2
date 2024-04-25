import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  //properties
  courses: Course[] = [];

  constructor(private courseService: CourseService){}

  ngOnInit(){
    this.courseService.getCourses().subscribe((course)=>{
      this.courses = course;
    });
  }
}