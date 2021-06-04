import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../model/repository';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  repositoryURL = "https://api.github.com/users";   // https://api.github.com/users/kkovacsics/repos

  constructor(
    private http: HttpClient,
  ) { }

  getRepositories(login: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.repositoryURL}/${login}/repos`);
  }
}
