import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { CustomMaterialModule } from './materialUI/custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { PizzaCreateComponent } from './pizza-create/pizza-create.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthComponent } from './auth/auth.component'
import { AuthGuard } from './guards/auth.guard';
import { PizzaUpdateComponent } from './pizza-update/pizza-update.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SplashComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'makePizza', component: PizzaCreateComponent },
  { path: 'authenticate', component: AuthComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    PizzaCreateComponent,
    ProfileComponent,
    AuthComponent,
    PizzaUpdateComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  entryComponents: [PizzaUpdateComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
