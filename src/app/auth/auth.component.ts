import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"
import { UserService } from "../services/user.service"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  signIn: FormGroup;
  signUp: FormGroup;
  userObj: object;
  response: Observable<any>;
  user: boolean = true

  constructor(private _fb: FormBuilder, private _userService: UserService) { }

  ngOnInit() {
    this.signIn = this._fb.group({
      usernameOrEmail: new FormControl(),
      password: new FormControl()
    })

    this.signUp = this._fb.group({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  login(): void {
    if(this.signIn.value.usernameOrEmail.includes("@")){
      console.log("email")
      this.userObj = {
        email: this.signIn.value.usernameOrEmail,
        password: this.signIn.value.password
      }
    } else {
      console.log("username")
      this.userObj = {
        username: this.signIn.value.usernameOrEmail,
        password: this.signIn.value.password
      }
    }
    this.response = this._userService.signIn(this.userObj)
    this.response.subscribe(res => {
      sessionStorage.setItem("id", res.user.id);
      sessionStorage.setItem("token", res.sessionToken);
    })
    this.signIn.reset()
  }

  createAccount(): void {
    this.response = this._userService.signup(this.signUp.value)
    this.response.subscribe(res => {
      sessionStorage.setItem("id", res.user.id);
      sessionStorage.setItem("token", res.sessionToken);
    })
    this.signUp.reset()
  }

  toggle(): void {
    this.user = !this.user
    this.signUp.reset();
    this.signIn.reset();
  }

}
