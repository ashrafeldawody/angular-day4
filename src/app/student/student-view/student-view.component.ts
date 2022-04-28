import { Component, OnInit } from '@angular/core';
import {Student} from "../student";
import {StudentService} from "../student.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  student:Student;
  constructor(public deptService:StudentService,private route: ActivatedRoute) {
    this.student = deptService.get(parseInt(this.route.snapshot.params['id']));
  }
  ngOnInit(): void {
  }

}
