import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, withInterceptors, provideHttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RouterLink, RouterLinkActive, RouterOutlet, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { SportComponent } from './sport/sport.component';
import { LeadingsportComponent } from './leadingsport/leadingsport.component';
import { CastVoteComponent } from './cast-vote/cast-vote.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { requestInterceptor } from './request.interceptor';
import { UserRoleManagementComponent } from './user-role-management/user-role-management.component';
import { HomeComponent } from './home/home.component';
import { SportsreportComponent } from './sportsreport/sportsreport.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserManagementComponent,
    SportComponent,
    LeadingsportComponent,
    CastVoteComponent,
    PageNotFoundComponent,
    UserRoleManagementComponent,
    HomeComponent,
    SportsreportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    RouterModule
  ],
  providers: [
    CookieService,
    provideHttpClient(withInterceptors([requestInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
