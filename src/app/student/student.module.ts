import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StudentService} from "./student.service";
import {MatSliderModule} from "@angular/material/slider";
import {DepartmentService} from "../department/department.service";



@NgModule({
  declarations: [
    StudentListComponent,
    StudentViewComponent,
    StudentEditComponent
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
  providers:[StudentService,DepartmentService]

})
export class StudentModule { }
