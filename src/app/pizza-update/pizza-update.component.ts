import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pizza-update',
  templateUrl: './pizza-update.component.html',
  styleUrls: ['./pizza-update.component.css']
})
export class PizzaUpdateComponent implements OnInit {
  pizzaUpdate: FormGroup
  updatedPizza
 
  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<PizzaUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log(this.data)
    this.pizzaUpdate = this._fb.group({
      id: this.data.id,
      user_id: sessionStorage.getItem("id"),
      crust: this.data.crust,
      sauce: this.data.sauce,
      cheese: this.data.cheese,
      toppings: this.data.toppings,
      timeToBake: this.data.timeToBake,
      bakeTemp: this.data.bakeTemp
  })
  }



}
