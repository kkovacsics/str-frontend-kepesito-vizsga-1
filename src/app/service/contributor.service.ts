import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contributor } from '../model/contributor';

@Injectable({
  providedIn: 'root'
})
export class ContributorService {

  contributorURL = "https://api.github.com/repos/angular/angular/contributors?per_page=100";

  constructor(
    private http: HttpClient,
  ) { }

  getContributors(): Observable<Contributor[]> {
    return this.http.get<Contributor[]>(this.contributorURL);
  }
}
