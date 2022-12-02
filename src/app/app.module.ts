import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FacebookLoginProvider, SocialAuthService, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';

const fbLoginOptions = {
  scope: 'email,user_birthday,user_gender',
  return_scopes: true,
  enable_profile_selector: true
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(environment.FB_APP_ID, fbLoginOptions)
          },
        ],
        onError(error: any) {
          console.error(error);
        },
      } as SocialAuthServiceConfig
    }, SocialAuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
