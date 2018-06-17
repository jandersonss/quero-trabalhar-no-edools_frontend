import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitHubService } from '../services/git-hub.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public repositories: any[];
  public user: any;
  constructor(private route: ActivatedRoute, private gitHubService: GitHubService, private toastr: ToastrService) {
    this.repositories = [];
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.getUser(params);
      this.getRepositories(params);
    });
  }

  getUser(params) {
    this.gitHubService
      .getUser(params.login)
      .subscribe((data) => {
        this.user = data;
      }, (err) => console.error(err));
  }

  /**
   * Consulta repositórios do usuário
   * @param params
   */
  getRepositories(params) {
    this.gitHubService
      .getUserRepositories(params.login)
      .subscribe((data: any[]) => {
        this.repositories = data;
      }, (err) => {
        this.toastr.error(err.message || err.error.message, 'Algum problema ocorrreu.');
      });
  }



}
