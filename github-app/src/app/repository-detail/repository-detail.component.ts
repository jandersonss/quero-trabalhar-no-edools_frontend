import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../services/git-hub.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repository-detail',
  templateUrl: './repository-detail.component.html',
  styleUrls: ['./repository-detail.component.scss']
})
export class RepositoryDetailComponent implements OnInit {

  public user: any;
  public repository: any;
  constructor(private route: ActivatedRoute, private gitHubService: GitHubService) {
    this.repository = [];
  }


  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.getUser(params);
      this.getRepositoryInfo(params);
    });
  }

  getUser(params) {
    this.gitHubService
      .getUser(params.login)
      .subscribe((data) => {
        this.user = data;
      }, (err) => console.error(err));
  }

  getRepositoryInfo(params) {
    this.gitHubService
      .getUserRepositorie(params.login, params.repoName)
      .subscribe((data) => {

      }, (err) => {
        console.error(err);
      });

  }
}
