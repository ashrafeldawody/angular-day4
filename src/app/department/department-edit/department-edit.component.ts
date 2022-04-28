import { Component, OnInit } from '@angular/core';
import {DepartmentService} from "../department.service";
import {Department} from "../department";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {
  department:Department = {
    id: 0,
    name: "",
    branch:""
  };
  constructor(public deptService:DepartmentService,private route: ActivatedRoute,private router: Router) {

    this.department = deptService.get(parseInt(this.route.snapshot.params['id']));
  }

  ngOnInit(): void {
  }
  isCreateForm():boolean{
    return (!this.route.snapshot.params['id'])
  }
  save(){
    if(this.deptService.idExists(this.department.id))
      this.deptService.update(this.department)
    else
      this.deptService.create(this.department)
    this.router.navigate(['/departments'])
  }

}
