import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './login.html'
})
export class LoginComponent {
  
    loginData = {}

    constructor(private authService: AuthService) {}

    loginUser() {
      this.authService.loginUser(this.loginData);
    }

}
