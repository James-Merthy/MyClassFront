import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructors
  constructor(private _http: HttpClient) { }

  // methods
  login(username: string, password: string): Observable<any> {
    return this._http.post<any>("http://localhost:8080/api/user/login", {"username": username, "password": password });
  }

  register(username: string, password: string): Observable<any> {
    return this._http.post<any>("http://localhost:8080/api/user/register", {"username": username, "password": password });
  }
}