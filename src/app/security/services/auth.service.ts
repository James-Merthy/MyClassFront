import { Injectable } from '@angular/core';
import { HttpClient , HttpParams} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {IToken} from "../../models/IToken";
import {SessionService} from "./session.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructors
  constructor(private _http: HttpClient, private _sessionService: SessionService) { }

  // methods
  login(username: string, password: string): Observable<IToken> {
    return this._http.post<IToken>("http://localhost:8080/api/user/login", {"username": username, "password": password })
      .pipe(
        tap((tokenHolder) =>  this._sessionService.login( tokenHolder.token ))
      );
  }

  register(username: string, password: string): Observable<IToken> {
    return this._http.post<IToken>("http://localhost:8080/api/user/register", {"username": username, "password": password });
  }
}
