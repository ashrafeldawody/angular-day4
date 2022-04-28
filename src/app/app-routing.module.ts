import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentListComponent} from "./department/department-list/department-list.component";
import {DepartmentViewComponent} from "./department/department-view/department-view.component";
import {DepartmentEditComponent} from "./department/department-edit/department-edit.component";
import {StudentListComponent} from "./student/student-list/student-list.component";
import {StudentEditComponent} from "./student/student-edit/student-edit.component";
import {StudentViewComponent} from "./student/student-view/student-view.component";

const routes: Routes = [
  {
    path: 'departments',
    component: DepartmentListComponent,
  },
  {
    path: 'departments/view/:id',
    component: DepartmentViewComponent,
  },
  {
    path: 'departments/edit/:id',
    component: DepartmentEditComponent,
  },
  {
    path: 'departments/create',
    component: DepartmentEditComponent,
  },
  {
    path: 'students',
    component: StudentListComponent,
  },
  {
    path: 'students/view/:id',
    component: StudentViewComponent,
  },
  {
    path: 'students/edit/:id',
    component: StudentEditComponent,
  },
  {
    path: 'students/create',
    component: StudentEditComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
