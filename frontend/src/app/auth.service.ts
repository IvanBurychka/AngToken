import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    constructor(private http: HttpClient) {} 

    registerUser (registrationData) {
        this.http.post('http://localhost:3000/register', registrationData)
            .subscribe(()=>{console.log('User saved')});
    }

    loginUser (loginData){
        this.http.post('http://localhost:3000/login', loginData)
            .subscribe( data => {
                console.log(data)
                localStorage.setItem('token', data);
                
            });
    }
}