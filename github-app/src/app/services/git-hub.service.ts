import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GitHubService {
  public USER_URL = `${environment.BASE_API_URL}/users`;
  public REPO_URL = `${environment.BASE_API_URL}/repos`;
  public SEARCH_URL = `${environment.BASE_API_URL}/search`;

  constructor(private http: HttpClient) {
  }
  /**
   * Busca usuários
   * @param login
   */
  findUser(login: string) {
    return this.http.get(`${this.SEARCH_URL}/users`, {
      params: {
        q: login
      }
    });
  }

  /**
   * Consulta dados de um usuário
   * @param login
   */
  getUser(login: string) {
    return this.http.get(`${this.USER_URL}/${login}`, {
      params: {
        q: login
      }
    });
  }

  /**
   * Consulta repositórios do usuário
   * @param login
   */
  getUserRepositories(login: string) {
    return this.http.get(`${this.USER_URL}/${login}/repos`, {
      params: {
        q: login
      }
    });
  }

  getUserRepositorie(login: string, repoName: string) {
    return this.http.get(`${this.REPO_URL}/${login}/${repoName}`);
  }
}
