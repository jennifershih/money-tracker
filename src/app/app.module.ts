import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  SocialAuthServiceConfig,
  SocialLoginModule,
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SocialLoginModule],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useFactory: () => {
        const clientId =
          '917270506123-vgm34qorth027m8uuk4sohso57a0u4b4.apps.googleusercontent.com';
        const socialAuthServiceConfig: SocialAuthServiceConfig = {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider(clientId),
            },
          ],
          onError: (err) => {
            console.error(err);
          },
        };
        return socialAuthServiceConfig;
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
