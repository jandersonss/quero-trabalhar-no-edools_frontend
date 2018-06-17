import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public accessToken: string;

  ngOnInit() {
    this.accessToken = localStorage.getItem('accessToken');
  }

  updateToken() {
    localStorage.setItem('accessToken', this.accessToken);
  }
}
