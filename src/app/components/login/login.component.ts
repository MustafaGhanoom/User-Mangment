import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private http: HttpClient, private router: Router, private localStorage: LocalStorageService) { 
    this.username="ahmad";
    this.password="123456";
  }

  ngOnInit() {
  }

  onSubmit() {
    this.http.post<any>('https://reqres.in/api/login', {
      email: this.username,
      password: this.password
    }).subscribe(response => {
      this.localStorage.setItem('user', {
        id: response.id,
        email: response.email
      });
      this.router.navigate(['/users-list']);
    });
  }
}
