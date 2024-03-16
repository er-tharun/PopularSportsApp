import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CastVoteComponent } from './cast-vote/cast-vote.component';
import { SportComponent } from './sport/sport.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LeadingsportComponent } from './leadingsport/leadingsport.component';
import { authGuard } from './auth.guard';
import { UserRoleManagementComponent } from './user-role-management/user-role-management.component';
import { HomeComponent } from './home/home.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { SportsreportComponent } from './sportsreport/sportsreport.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent},
  { path:'castvote', component:CastVoteComponent, canActivate:[authGuard]},
  { path:'sport', component:SportComponent, canActivate:[authGuard]},
  { path:'leadingsport', component:LeadingsportComponent, canActivate:[authGuard]},
  { path:'userrolemanagement', component:UserRoleManagementComponent, canActivate:[authGuard]},
  { path:'usermanagement', component:UserManagementComponent},
  { path:'reports', component:SportsreportComponent, canActivate:[authGuard]},
  { path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
