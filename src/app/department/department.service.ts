import { Injectable } from '@angular/core';
import {Department} from "./department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  departments: Department[] = [
    {id:1,name:"Open Source",branch:"Mansoura"}
  ];
  constructor() { }
  getAll(){
    return this.departments;
  }
  create(dept:Department){
    this.departments.push(dept);
  }
  get(id: number):Department{
    let foundID = this.departments.findIndex(item=>item.id === id)
    if(foundID === -1) return {id:0,name:"",branch:""};
    return {...this.departments[foundID]}
  }
  update(dept:Department){
    let foundID = this.departments.findIndex(item=>item.id === dept.id)
    if(foundID === -1) return;
    this.departments[foundID].name = dept.name;
    this.departments[foundID].branch = dept.branch;
  }
  delete(id: number){
    let foundID = this.departments.findIndex(item=>item.id === id)
    if(foundID === -1) return;
    this.departments.splice(foundID,1)
  }
  idExists(id:number):boolean{
    return this.departments.findIndex(item=>item.id === id) != -1
  }
}
