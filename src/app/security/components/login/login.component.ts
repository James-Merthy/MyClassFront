import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { SessionService } from "../../services/session.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // variables
  username: string = "";
  password: string = "";

  // constructor
  constructor(private _auth: AuthService, private _session: SessionService, private _router: Router) { }

  // methods
  ngOnInit(): void {
  }

  login(): void {
    this._auth.login(this.username, this.password).subscribe(data => {
      let token = data["token"];
      this._session.login(token);
      if (this._session.isAdmin())
      this._router.navigate(["/admin"]).then(res => console.log("Has changed"));
      if (this._session.isProf())
        this._router.navigate(["/prof"]).then(res => console.log("Has changed"));
      if (this._session.isEleve())
        this._router.navigate(["/eleve"]).then(res => console.log("Has changed"));

    });
  }



}
