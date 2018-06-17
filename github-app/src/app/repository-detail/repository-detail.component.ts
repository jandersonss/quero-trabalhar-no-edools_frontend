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
  public tab: string;
  public repository: any;
  private params: any;
  constructor(private route: ActivatedRoute, private gitHubService: GitHubService) {
    this.repository = [];
  }


  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.params = params;
      this.tab = 'contributors';
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
    // Recupera o repositório
    this.gitHubService
      .getUserRepositorie(params.login, params.repoName)
      .subscribe((data) => {
        this.repository = data;
      }, (err) => {
        console.error(err);
      });
    // Recupera contribuidores
    this.gitHubService
      .getUserRepositorie(params.login, `${params.repoName}/contributors`)
      .subscribe((data: any[]) => {
        if (data.length === 0) {
          this.tab = 'issue';
        }
        this.repository.contributors = data;
      }, (err) => {
        console.error(err);
      });

    // Recupera issues
    this.gitHubService
      .getUserRepositorie(params.login, `${params.repoName}/issues`)
      .subscribe((data: any[]) => {
        this.repository.issues = data;
      }, (err) => {
        console.error(err);
      });

  }


  loadComments(issue: any) {
    if (issue.comments > 0) {
      // Recupera comentarios de uma issue
      this.gitHubService
        .getUserRepositorie(this.params.login, `${this.params.repoName}/issues/${issue.number}/comments`)
        .subscribe((data: any[]) => {
          issue.commentsList = data;
        }, (err) => {
          console.error(err);
        });
    }
  }
}
