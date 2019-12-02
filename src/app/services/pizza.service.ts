import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Pizza } from "../models/pizza.model"

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

export class PizzaService {
  private _dbURL = "http://localhost:3000/pizza"

  constructor(private _http: HttpClient) { }

  getPizzas(): Observable<Pizza[]> {
    return this._http.get<Pizza[]>(`${this._dbURL}/fetch`, httpOptions())
  }

  createPizza(pizza): Observable<Pizza> {
    return this._http.post<Pizza>(`${this._dbURL}/create`, pizza, httpOptions())
  }

  deletePizza(id): any {
    return this._http.delete(`${this._dbURL}/delete/${id}`, httpOptions())
  }

  updatePizza(id, pizza): any {
    return this._http.put(`${this._dbURL}/update/${id}`, pizza, httpOptions())
  }

  getPizzasByUser(): Observable<Pizza[]> {
    return this._http.get<Pizza[]>(`${this._dbURL}/fetch/user`, httpOptions())
  }

}
