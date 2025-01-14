import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContributorsComponent } from './page/contributors/contributors.component';
import { RepositoriesComponent } from './page/repositories/repositories.component';
import { SorterPipe } from './pipe/sorter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContributorsComponent,
    RepositoriesComponent,
    SorterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
