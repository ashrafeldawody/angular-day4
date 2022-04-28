import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentListComponent} from "./department/department-list/department-list.component";
import {DepartmentViewComponent} from "./department/department-view/department-view.component";
import {DepartmentEditComponent} from "./department/department-edit/department-edit.component";

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
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
