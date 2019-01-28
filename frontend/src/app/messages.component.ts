import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-messages',
  template: `<div *ngFor="let message of messages"> 
  <mat-card>{{ message.message }}</mat-card>
</div>`
  
})
export class MessagesComponent implements OnInit {
  title = 'frontend';
  messages: string[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMessage()
      .subscribe(responce => {
        console.log(responce);
        this.messages = responce;
      });
  }
}
