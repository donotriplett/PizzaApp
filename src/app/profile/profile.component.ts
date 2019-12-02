import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { User } from '../models/user.model';
import { Observable } from "rxjs"
import { PizzaService } from '../services/pizza.service';
import { MatDialog } from '@angular/material/dialog';
import { PizzaUpdateComponent } from '../pizza-update/pizza-update.component';
import { Pizza } from '../models/pizza.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  response$: Observable<any>;
  user: any;
  pizzas$: Observable<Pizza[]>;

  constructor(
    private _userService: UserService,
    private _pizzaService: PizzaService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getUser()
  }

  getUser(): void {
    this.pizzas$ = this._pizzaService.getPizzasByUser()
    this.user = this._userService.getUser()
    this.user.subscribe(res => {
      this.user = res
    })
  }

  pizzaDelete(id): void {
    this.response$ = this._pizzaService.deletePizza(id)
    this.response$.subscribe(res => {
      console.log(res)
      this.getUser()
    })

  }

  openUpdate(pizza): void {
    const dialogRef = this.dialog.open(PizzaUpdateComponent, {
      data: pizza
    })

    dialogRef.afterClosed().subscribe(res => {
      this.response$ = this._pizzaService.updatePizza(res.id, res)
      this.response$.subscribe(res => {
        console.log(res)
        this.getUser()
      })
      
    })

  }



}
