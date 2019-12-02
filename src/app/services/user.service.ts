import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';
import { User } from "../models/user.model"
import { JwtHelperService } from '@auth0/angular-jwt';

const httpOptions = () => {
  if (sessionStorage.getItem('token')) {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": sessionStorage.getItem('token')
      })
    }
  } else {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
  }

}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private _dbURL = "http://localhost:3000/user"
  public jwtHelper = new JwtHelperService();

  constructor(private _http: HttpClient) { }

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token')
    return !this.jwtHelper.isTokenExpired(token)
  }

  signIn(user): Observable<any> {
    return this._http.post<any>(`${this._dbURL}/signin`, user, httpOptions())
  }

  signup(user): Observable<any> {
    return this._http.post<any>(`${this._dbURL}/signup`, user, httpOptions())
  }

  logout(): void {
    sessionStorage.removeItem("token")
  }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(`${this._dbURL}/users`, httpOptions())
  }

  getUser(): Observable<User> {
    return this._http.get<User>(`${this._dbURL}/profile`, httpOptions())
  }

  deleteUser(): any {
    return this._http.delete(`${this._dbURL}/delete`, httpOptions())
  }

}
