import { Component, OnInit } from '@angular/core';
import {DepartmentService} from "../department.service";
import {MatTableDataSource} from "@angular/material/table";
import {Department} from "../department";

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  // @ts-ignore
  departments:MatTableDataSource<Department>
  columnsToDisplay = ['id', 'name', 'branch','actions'];
  constructor(public deptService: DepartmentService) {
    this.refreshTable()

  }
  ngOnInit(): void {

  }
  delete(id:number):void{
    this.deptService.delete(id)
    this.refreshTable()
  }
  refreshTable(){
    this.departments = new MatTableDataSource<Department>(this.deptService.getAll());
  }
}
