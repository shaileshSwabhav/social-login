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

  fbLoginOptions = {
    scope: 'email,user_birthday,user_gender',
    return_scopes: true,
    enable_profile_selector: true
  };
  

  ngOnInit(): void {
    this.authService.authState.subscribe({
      next: (user: SocialUser) => {
        console.log("ngoninit user -> ", user);
        this.socialUser = user
        this.isLoggedIn = (user != null)
      },
      error: (err: any) => {
        console.error(err);
        this.isLoggedIn = false
      }
    })
  }

  socialUser: SocialUser | null = null

  signInWithFB(): void {
    try {
      const socialUser = this.authService.signIn(FacebookLoginProvider.PROVIDER_ID, this.fbLoginOptions);
      console.log("after login -> ", socialUser);
      this.isLoggedIn = true
    } catch (error) {
      console.error(error);
      this.isLoggedIn = false
    }
  }

  signout(): void {
    try {
      this.authService.signOut();
      this.isLoggedIn = false
    } catch (error) {
      console.error(error);
    }
  }
}
