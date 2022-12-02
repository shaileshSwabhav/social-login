import { SocialAuthService, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private authService: SocialAuthService,
  ) { }

  signInWithFB(): void {
    console.log(FacebookLoginProvider.PROVIDER_ID);

    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}
