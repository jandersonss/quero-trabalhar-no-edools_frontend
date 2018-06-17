import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RepositoryComponent } from './repository/repository.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { PageHeaderComponent } from './page/page-header/page-header.component';
import { PageContentComponent } from './page/page-content/page-content.component';
import { GitHubService } from './services/git-hub.service';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { MomentDatePipe } from './pipes/moment-date.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { RequestInterceptor } from './request-interceptor';
import { RepositoryDetailComponent } from './repository-detail/repository-detail.component';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
];

@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    UserComponent,
    HomeComponent,
    PageComponent,
    PageHeaderComponent,
    PageContentComponent,
    MomentDatePipe,
    RepositoryDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule
  ],
  providers: [GitHubService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
