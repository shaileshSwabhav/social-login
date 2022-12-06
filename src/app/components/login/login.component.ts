import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FacebookService } from 'src/app/service/facebook/facebook.service';
import { ILinkedInRedirectURL, LinkedinService } from 'src/app/service/linkedin/linkedin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private linkedinService: LinkedinService,
    private fbService: FacebookService,
  ) { }

  ngOnInit(): void {
  }

  isLoggedIn: boolean = false

  signInWithFB(): void {
    this.fbService.facebookLogin().subscribe({
      next: (response: any) => {
        console.log("success :) ", response);
        this.redirectURL = response.body
        window.open(this.redirectURL!.url, "_self")
      },
      error: (err: any) => {
        console.error(err);
      }
    })
  }

  redirectURL: ILinkedInRedirectURL | null = null

  signInWithLinkedIn(): void {
    console.log("signInWithLinkedIn clicked");
    this.linkedinService.linkedInLogin().subscribe({
      next: (value: HttpResponse<ILinkedInRedirectURL>) => {
        console.log();
        this.redirectURL = value.body
        console.log("success :) ", value);
        window.open(this.redirectURL!.url, "_self")
      },
      error: (err: any) => {
        console.error(err);
      }
    })
  }
  
  signout(): void {
    // try {
    //   this.authService.signOut();
    //   this.isLoggedIn = false
    // } catch (error) {
    //   console.error(error);
    // }
  }

}
