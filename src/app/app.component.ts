import { Component, OnInit } from '@angular/core';
import { FacebookService } from './service/facebook/facebook.service';
import { LinkedinService } from './service/linkedin/linkedin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private linkedinService: LinkedinService,
    private fbService: FacebookService,
  ) { }

  isLoggedIn: boolean = false

  ngOnInit(): void {
  }

  signInWithFB(): void {
    this.fbService.facebookLogin().subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (err: any) => {
        console.error(err);
      }
    })

    // try {
    //   const socialUser = this.authService.signIn(FacebookLoginProvider.PROVIDER_ID, this.fbLoginOptions);
    //   console.log("after login -> ", socialUser);
    //   this.isLoggedIn = true
    // } catch (error) {
    //   console.error(error);
    //   this.isLoggedIn = false
    // }
  }

  signout(): void {
    // try {
    //   this.authService.signOut();
    //   this.isLoggedIn = false
    // } catch (error) {
    //   console.error(error);
    // }
  }

  signInWithLinkedIn(): void {
    console.log("signInWithLinkedIn clicked");
    this.linkedinService.linkedInLogin().subscribe({
      next: (value: any) => {
        console.log(value);
        console.log("success :)");
      },
      error: (err: any) => {
        console.error(err);
        console.error("error :(");
      }
    })
  }
}
