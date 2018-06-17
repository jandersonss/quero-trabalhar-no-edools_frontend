import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../services/git-hub.service';

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

  constructor(private gitHubService: GitHubService) { }

  ngOnInit() {
  }

  searchUser() {
    this.gitHubService.findUser(this.dados.userLogin)
      .subscribe((data: any) => {
        this.dados.userList = data.items;
      }, (err) => {
        console.error(err);
      });
  }

}
