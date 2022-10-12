import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./security/components/login/login.component";
import {AdminComponent} from "./components/admin/admin.component";
import {ProfComponent} from "./components/prof/prof.component";
import {EleveComponent} from "./components/eleve/eleve.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'prof', component: ProfComponent },
  { path: 'eleve', component: EleveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
