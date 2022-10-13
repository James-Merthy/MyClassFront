import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ILecon} from "../models/ILecon";
import {SessionService} from "../security/services/session.service";
import {IStudent} from "../models/IStudent";

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  token: string | null = null;

  constructor(private _http: HttpClient, private _sessionService: SessionService) {
    _sessionService.Token$.subscribe((token) => this.token = token);
  }

  // methods
  getAll(): Observable<IStudent[]> {
    let token: string = "";

    if (localStorage.getItem("token") != null)
    { // @ts-ignore
      token = localStorage.getItem("token");
    }

    const headers = new HttpHeaders().append("Authorization", `Bearer ${token}`);
    return this._http.get<IStudent[]>("http://localhost:8080/eleve/all" , {headers}) ;
  }

}
