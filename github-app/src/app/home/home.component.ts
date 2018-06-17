import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../services/git-hub.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public dados: any = {
    userLogin: null,
    userList: null
  };

  constructor(private gitHubService: GitHubService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  searchUser() {
    this.gitHubService.findUser(this.dados.userLogin)
      .subscribe((data: any) => {
        this.dados.userList = data.items;
      }, (err) => {
        this.toastr.error(err.message || err.error.message, 'Algum problema ocorrreu.');
      });
  }

}
