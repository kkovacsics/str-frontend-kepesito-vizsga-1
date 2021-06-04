import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContributorsComponent } from './page/contributors/contributors.component';
import { RepositoriesComponent } from './page/repositories/repositories.component';

const routes: Routes = [
  {
    path: '',
    component: ContributorsComponent
  },
  {
    path: 'repository/:login',
    component: RepositoriesComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
