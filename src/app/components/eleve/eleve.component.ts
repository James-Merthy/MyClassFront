import { Component, OnInit } from '@angular/core';

import {IStudent} from "../../models/IStudent";
import {EleveService} from "../../services/eleve.service";
import {SessionService} from "../../security/services/session.service";

@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.css']
})
export class EleveComponent implements OnInit {

  eleve: string = "";

  constructor(private session: SessionService) { }

  ngOnInit(): void {


    let token = "";
    if (localStorage.getItem("token"))
    { // @ts-ignore
      token = localStorage.getItem("token");
      this.eleve = this.session.getUser(token);
    }

  }

}
