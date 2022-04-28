import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentViewComponent } from './department-view/department-view.component';
import {MatSliderModule} from "@angular/material/slider";
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import {MatCardModule} from "@angular/material/card";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DepartmentService} from "./department.service";



// @ts-ignore
@NgModule({
  declarations: [
    DepartmentViewComponent,
    DepartmentEditComponent,
    DepartmentListComponent
  ],
  exports: [
    DepartmentViewComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    SweetAlert2Module,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatRadioModule,
    FormsModule,
    SweetAlert2Module
  ],
  providers:[DepartmentService]
})
export class DepartmentModule { }
