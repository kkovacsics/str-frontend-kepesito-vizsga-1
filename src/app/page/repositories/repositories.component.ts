import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Repository } from 'src/app/model/repository';
import { RepositoryService } from 'src/app/service/repository.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  repositories$: Observable<Repository[]> = new Observable();
  login = "";

  constructor(
    private repository: RepositoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      param => {
        this.login = param.login;
        this.repositories$ = this.repository.getRepositories(param.login);
    })
  }

  onSubmit(): void {
    this.router.navigate(['/']);
  }


}
