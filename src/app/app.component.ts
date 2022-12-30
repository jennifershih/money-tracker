import { Component, OnInit } from '@angular/core';
import {
  SocialAuthService,
  SocialUser,
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'moneyTracker';

  user: SocialUser | undefined;

  private accessToken: string | undefined;

  get loggedIn() {
    return this.user != null;
  }

  constructor(private authService: SocialAuthService) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  async getAccessToken() {
    this.accessToken = await this.authService.getAccessToken(
      GoogleLoginProvider.PROVIDER_ID
    );
    return this.accessToken;
  }

  async refreshAuthToken() {
    await this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  async refreshAccessToken() {
    await this.authService.refreshAccessToken(GoogleLoginProvider.PROVIDER_ID);
  }

  async signOut() {
    await this.authService.signOut();
  }
}
