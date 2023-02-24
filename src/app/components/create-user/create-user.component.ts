// create-user.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styles: []
})
export class CreateUserComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;

  constructor(private http: HttpClient, private router: Router) { this.firstName="ahmad",
this.lastName="hafez",
this.email="ahmad@gmail.com"}

  ngOnInit() {
  }

  onSubmit() {
    this.http.post<any>('https://reqres.in/api/users', {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email
    })
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
