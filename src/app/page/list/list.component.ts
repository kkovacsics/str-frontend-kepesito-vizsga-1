import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contributor } from 'src/app/model/contributor';
import { ContributorService } from 'src/app/service/contributor.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list$: Observable<Contributor[]> = this.contributor.getContributors();
  
  constructor(
    private contributor: ContributorService,
  ) { }

  ngOnInit(): void {
  }

}
