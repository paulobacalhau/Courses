import { Component } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({    
    // selector: 'app-course-list',
    templateUrl: './course-list.component.html'
    // template: '<h2> Course List </h2>'
    
})

export class CourseListComponent {
    courses: Course[] = [];
    filteredCourses: Course[] = [];
    //Variável com _ serve par indicar que só vai ser usada aqui

    _courses: Course[] = [];
    _filterBy!: string;

    constructor(private courseservice: CourseService){
    }

    ngOnInit(): void{
        this._courses = this.courseservice.retrieveAll();
        this.filteredCourses = this._courses;
       }

    set filter(value: string) { 
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
       }

    get filter() { 
        return this._filterBy;
    }       
}
