import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SecurityModule} from "./security/security.module";
import { AdminComponent } from './components/admin/admin.component';
import { ProfComponent } from './components/prof/prof.component';
import { EleveComponent } from './components/eleve/eleve.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProfComponent,
    EleveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SecurityModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
