import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',


  styles: []
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`https://reqres.in/api/users/${id}`)
      .subscribe(response => {
        this.user = response.data;
      });
  }
}
