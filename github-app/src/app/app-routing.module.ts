import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RepositoryDetailComponent } from './repository-detail/repository-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/:login', component: UserComponent },
  { path: 'user/:login/:repoName', component: RepositoryDetailComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
