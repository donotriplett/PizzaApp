import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"
import { PizzaService } from "../services/pizza.service"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pizza-create',
  templateUrl: './pizza-create.component.html',
  styleUrls: ['./pizza-create.component.css']
})
export class PizzaCreateComponent implements OnInit {
  pizzaCreate: FormGroup;
  response: Observable<any>;
  @Output() created = new EventEmitter<void>();

  constructor(private _pizzaService: PizzaService, private _fb: FormBuilder) { }

  ngOnInit() {
    this.pizzaCreate = this._fb.group({
        user_id: sessionStorage.getItem("id"),
        crust: new FormControl(),
        sauce: new FormControl(),
        cheese: new FormControl(),
        toppings: new FormControl(),
        timeToBake: new FormControl(),
        bakeTemp: new FormControl()
    })
  }

  onSubmit(): void {
    this.response = this._pizzaService.createPizza(this.pizzaCreate.value)
    this.response.subscribe(res => console.log(res))
    this.pizzaCreate.reset()
    this.created.emit()
  }

}
