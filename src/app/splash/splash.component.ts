import { Component, OnInit } from '@angular/core';
import { Pizza } from "../models/pizza.model"
import { PizzaService } from "../services/pizza.service"
import { Observable } from "rxjs"

export interface Tile {
  color: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  pizzas$: Observable<Pizza[]>

  constructor(private _pizzaService: PizzaService) { }

  ngOnInit() {
    this.getPizzas()
  }

  getPizzas(): void {
    this.pizzas$ = this._pizzaService.getPizzas()
    console.log(this.pizzas$)
  }

}
