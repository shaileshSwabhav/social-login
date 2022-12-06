import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LinkedInComponent } from './components/linked-in/linked-in.component';
import { LoginComponent } from './components/login/login.component';
import { FacebookComponent } from './components/facebook/facebook.component';
import { GithubComponent } from './components/github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkedInComponent,
    LoginComponent,
    FacebookComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
