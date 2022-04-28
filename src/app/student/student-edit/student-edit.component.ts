import { Component, OnInit } from '@angular/core';
import {StudentService} from "../student.service";
import {Student} from "../student";
import {ActivatedRoute, Router} from "@angular/router";
import {DepartmentService} from "../../department/department.service";
import {Department} from "../../department/department";

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  student:Student;
  departments: Department[];
  constructor(public studentService:StudentService,public deptService:DepartmentService,private route: ActivatedRoute,private router: Router) {
    this.student = studentService.get(parseInt(this.route.snapshot.params['id']));
    this.departments = deptService.getAll();
  }

  ngOnInit(): void {
  }
  isCreateForm():boolean{
    return (!this.route.snapshot.params['id'])
  }
  save(){
    if(this.studentService.idExists(this.student.id))
      this.studentService.update(this.student)
    else
      this.studentService.create(this.student)
    this.router.navigate(['/students'])
  }

}
