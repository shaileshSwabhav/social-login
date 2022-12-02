import { SocialAuthService, FacebookLoginProvider } from '@abacritt/angularx-social-login';
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

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      console.log(user);
    }, (err: any) => {
      console.error(err);
    })
  }

  signInWithFB(): void {
    console.log(FacebookLoginProvider.PROVIDER_ID);

    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}
