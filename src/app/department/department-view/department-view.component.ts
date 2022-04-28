import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DepartmentService} from "../department.service";
import {Department} from "../department";

@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.css']
})
export class DepartmentViewComponent implements OnInit {

  department:Department = {
    id: 0,
    name: "",
    branch:""
  };
  constructor(public deptService:DepartmentService,private route: ActivatedRoute) {

    this.department = deptService.get(parseInt(this.route.snapshot.params['id']));
  }
  ngOnInit(): void {
  }

}
