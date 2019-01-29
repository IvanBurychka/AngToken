import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'app-users',
    template: `
    <div *ngFor="let user of users"> 
      <mat-card [routerLink]="['/profile', user._id]" style="cursor: pointer">{{ user.email }}</mat-card>
    </div>`
    
  })
export class UsersComponent {

    title = 'frontend';
    users: [];

    constructor(private apiService: ApiService) {}

    ngOnInit() {
    this.apiService.getUsers()
      .subscribe(responce => {
        console.log(responce);
        this.users = responce;
      });
  }
}