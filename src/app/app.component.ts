import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizzaClient';
  
  constructor(public router: Router) { }
  
  isUser = () => {
    if (sessionStorage.getItem('token')) {
      return true
    } else {
      return false
    }
  }

  logout(): void {
    sessionStorage.clear()
    this.router.navigate(['/home'])
  }

}
