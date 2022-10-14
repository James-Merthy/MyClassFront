import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SessionService} from "../security/services/session.service";
import {Observable} from "rxjs";

import {IUserStudent} from "../models/IUserStudent";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  token: string | null = null;

  constructor(private _http: HttpClient, private _sessionService: SessionService) {
    _sessionService.Token$.subscribe((token) => this.token = token);
  }

  // // methods
  // getAll(): Observable<IUserStudent> {
  //   let token: string = "";
  //
  //   if (localStorage.getItem("token") != null) { // @ts-ignore
  //     token = localStorage.getItem("token");
  //   }
  //
  //
  //   const headers = new HttpHeaders().append("Authorization", `Bearer ${token}`);
  //   return this._http.get<IUserStudent>("localhost:8080/user/all", {headers});
  // }
}
