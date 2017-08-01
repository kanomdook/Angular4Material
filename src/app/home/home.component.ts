import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myData: Array<any>;

  constructor(private http:Http) {
    
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(res => this.myData = res);

  }

  ngOnInit() {
  }

}
