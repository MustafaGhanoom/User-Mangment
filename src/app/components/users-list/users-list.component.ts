import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
 
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styles: [],

 

})
export class UsersListComponent implements OnInit {
  users: any=[];
  page: number = 1;
  totalPages: number=0;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.http.get<any>(`https://reqres.in/api/users?page=${this.page}`)
      .subscribe(response => {
        this.users = response.data;
        this.totalPages = response.total_pages;
      });
  }

  onUserClick(id: number) {
    this.router.navigate([`/user-details/${id}`]);
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.loadUsers();
    }
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadUsers();
    }
  }
}

