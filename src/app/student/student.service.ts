import { Injectable } from '@angular/core';
import {Student} from "./student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [
    {id:1,name:"Ashraf Eldawody",age:24,email:"ashraf6450@gmail.com",department:"Open Source"}
  ];
  constructor() { }
  getAll(){
    return this.students;
  }
  create(student:Student){
    this.students.push(student);
  }
  get(id: number):Student{
    let foundID = this.students.findIndex(item=>item.id === id)
    if(foundID === -1) return {id:0,name:"",age:0,email:"",department:""}
    return {...this.students[foundID]}
  }
  update(student:Student){
    let foundID = this.students.findIndex(item=>item.id === student.id)
    if(foundID === -1) return;
    this.students[foundID].name = student.name;
    this.students[foundID].age = student.age;
    this.students[foundID].email = student.email;
    this.students[foundID].department = student.department;
  }
  delete(id: number){
    let foundID = this.students.findIndex(item=>item.id === id)
    if(foundID === -1) return;
    this.students.splice(foundID,1)
  }
  idExists(id:number):boolean{
    return this.students.findIndex(item=>item.id === id) != -1
  }
}
