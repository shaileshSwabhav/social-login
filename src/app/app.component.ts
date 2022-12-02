import { SocialAuthService, FacebookLoginProvider, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private authService: SocialAuthService,
  ) { }

  isLoggedIn: boolean = false

  ngOnInit(): void {
    this.authService.authState.subscribe({
      next: (user: SocialUser) => {
        console.log("ngoninit user -> ", user);
        this.isLoggedIn = true
      },
      error: (err: any) => {
        console.error(err);
        this.isLoggedIn = false
      }
    })
  }


  signInWithFB(): void {
    console.log(FacebookLoginProvider.PROVIDER_ID);

    try {
      const socialUser = this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
      console.log("after login -> ", socialUser);
      this.isLoggedIn = true
    } catch (error) {
      console.error(error);
      this.isLoggedIn = false
    }
  }

  signout(): void {
    this.authService.signOut();
  }
}
