import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contributor } from 'src/app/model/contributor';
import { ContributorService } from 'src/app/service/contributor.service';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent implements OnInit {

  contributors$: Observable<Contributor[]> = this.contributor.getContributors();
  
  constructor(
    private contributor: ContributorService,
  ) { }

  ngOnInit(): void {
  }

}
