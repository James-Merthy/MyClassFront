import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../security/services/session.service";

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit {
  prof: string = "";

  constructor(private session: SessionService) { }

  ngOnInit(): void {
    let token = "";
    if (localStorage.getItem("token"))
      { // @ts-ignore
        token = localStorage.getItem("token");
        this.prof = this.session.getUser(token);
      }
  }

}
