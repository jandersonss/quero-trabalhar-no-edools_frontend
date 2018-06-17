import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public accessToken: string;
  constructor(private toastr: ToastrService) { }
  ngOnInit() {
    this.accessToken = localStorage.getItem('accessToken');
  }

  updateToken() {
    localStorage.setItem('accessToken', this.accessToken);
    this.toastr.success('Token salvo.');
  }
}
