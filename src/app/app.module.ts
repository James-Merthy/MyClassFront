import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SecurityModule} from "./security/security.module";
import { AdminComponent } from './components/admin/admin.component';
import { ProfComponent } from './components/prof/prof.component';
import { EleveComponent } from './components/eleve/eleve.component';
import { LeconComponent } from './components/lecon/lecon.component';
import { LeconPageComponent } from './components/lecon/lecon-page/lecon-page.component';
import { LeconCreateComponent } from './components/lecon/lecon-create/lecon-create.component';
import { EleveListComponent } from './components/eleve/eleve-list/eleve-list.component';
import {CreatePageComponent} from "./components/admin/create-page/create-page.component";
import { InsertStudentComponent } from './components/admin/create-page/insert-student/insert-student.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProfComponent,
    EleveComponent,
    LeconComponent,
    LeconPageComponent,
    LeconCreateComponent,
    CreatePageComponent,
    EleveListComponent,
    InsertStudentComponent,

  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        SecurityModule,
        ReactiveFormsModule
    ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
