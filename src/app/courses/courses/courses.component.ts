import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses$: Observable<Course[]>;
  displayedColumns = ['_id', 'name', 'category'];



  constructor(private coursesServices: CoursesService){

    this.courses$ = this.coursesServices.list();

  }

  ngOnInit():void{

  }
}
