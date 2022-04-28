import {Component, OnInit} from '@angular/core';
import {StudentService} from "../student.service";
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {Student} from "../student";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class StudentListComponent implements OnInit {
  // @ts-ignore
  students:MatTableDataSource<Student>
  columnsToDisplay = ['id', 'name', 'age', 'email', 'department','actions'];
  constructor(public studentService: StudentService) {
    this.refreshTable()

  }
  ngOnInit(): void {

  }
  delete(id:number):void{
    this.studentService.delete(id)
    this.refreshTable()
  }
  refreshTable(){
    this.students = new MatTableDataSource<Student>(this.studentService.getAll());
  }
}
