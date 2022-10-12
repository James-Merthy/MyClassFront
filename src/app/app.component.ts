import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SessionService} from "./security/services/session.service";
import {AuthService} from "./security/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MyClassFront';
  username: string = "";
  password: string = "";

  // getters
  get isConnected(): boolean {
    return this._session.isConnected();
  }

  constructor(private _session: SessionService, private _auth: AuthService, private router: Router) {}


  ngOnInit(): void {}

  ngOnChanges(changes: any) {
    console.log("CHANGES");
  }

  onSubmit(): void {
    this._auth.login(this.username, this.password).subscribe(data => {
      console.log(data["token"]);
      let token = data["token"];
      this._session.login(token);
      this.router.navigate(["/admin"]);
      this.router.navigate(["/prof"]);
      this.router.navigate(["/eleve"]);
    });
  }
}
