import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookComponent } from './components/facebook/facebook.component';
import { LinkedInComponent } from './components/linked-in/linked-in.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "auth/linkedIn/callback", component: LinkedInComponent },
  { path: "auth/facebook/callback", component: FacebookComponent },
  { path: "", pathMatch: "full", redirectTo:"/login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
