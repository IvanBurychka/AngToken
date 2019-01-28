import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './register.html'
})
export class RegisterComponent {
  
    registerData = {}

    constructor(private authService: AuthService) {}

    post() {
        this.authService.registerUser(this.registerData);
    }

}
