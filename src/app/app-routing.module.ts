import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./security/components/login/login.component";
import {AdminComponent} from "./components/admin/admin.component";
import {ProfComponent} from "./components/prof/prof.component";
import {EleveComponent} from "./components/eleve/eleve.component";
import {LeconComponent} from "./components/lecon/lecon.component";
import {LeconPageComponent} from "./components/lecon/lecon-page/lecon-page.component";
import {LeconCreateComponent} from "./components/lecon/lecon-create/lecon-create.component";
import {EleveListComponent} from "./components/eleve/eleve-list/eleve-list.component";
import {CreatePageComponent} from "./components/admin/create-page/create-page.component";
import {InsertStudentComponent} from "./components/admin/create-page/insert-student/insert-student.component";


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'prof', component: ProfComponent },
  { path: 'eleve', component: EleveComponent },
  { path: 'lecon', component: LeconComponent },
  { path: 'lecon-page', component: LeconPageComponent },
  { path: 'lecon-create', component: LeconCreateComponent },
  { path: 'eleve-list', component: EleveListComponent },
  { path: 'create-page', component: CreatePageComponent },
  { path: 'insert-student', component: InsertStudentComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
