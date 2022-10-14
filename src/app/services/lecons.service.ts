import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ILecon} from "../models/ILecon";
import {SessionService} from "../security/services/session.service";

@Injectable({
  providedIn: 'root'
})
export class LeconsService {

  token: string | null = null;

  constructor(private _http: HttpClient, private _sessionService: SessionService) {
    _sessionService.Token$.subscribe( (token) => this.token = token );
  }

  // methods
  getAll(): Observable<ILecon[]> {
    let token: string = "";

    if (localStorage.getItem("token") != null)
    { // @ts-ignore
      token = localStorage.getItem("token");
    }

    const headers = new HttpHeaders().append("Authorization", `Bearer ${token}`);

    return this._http.get<ILecon[]>("http://localhost:8080/lecon/all", { headers: headers });
  }

  public add(form: any): Observable<any> {
    let token: string = "";
    if (localStorage.getItem("token") != null)
    { // @ts-ignore
      token = localStorage.getItem("token");
      console.log(token);
    }
    const headers = new HttpHeaders().append("Authorization", `Bearer ${token}`);
    console.log(form);
    return this._http.post<any>("http://localhost:8080/lecon/create" , form, {headers});
  }

  getOne(id: number): Observable<ILecon> {
    return this._http.get<ILecon>("http://localhost:8080/lecon/" + id);
  }
}
