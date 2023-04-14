import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SplashComponent } from './splash/splash.component';
import { NewcaseComponent } from './newcase/newcase.component';
import { ReportComponent } from './report/report.component';
import { AdvocateComponent } from './advocate/advocate.component';
import { AdvocateProfileComponent } from './advocate-profile/advocate-profile.component';
import { ClientComponent } from './client/client.component';
import { HeaderComponent } from './header/header.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:"",component:LoginComponent,pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'menu',canActivate:[AuthGuard], component:MenuComponent},
  {path:'newcase',canActivate:[AuthGuard],component:NewcaseComponent, },
  {path:'report',canActivate:[AuthGuard],component:ReportComponent},
  {path:'advocate',canActivate:[AuthGuard],component:AdvocateComponent},
  {path:'advocate-profile',canActivate:[AuthGuard],component:AdvocateProfileComponent},
  {path:'client',canActivate:[AuthGuard],component:ClientComponent},
  {path:'header',canActivate:[AuthGuard],component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[
  SplashComponent,
  LoginComponent,
  MenuComponent,
  NewcaseComponent,
  ReportComponent,
  AdvocateComponent,
  AdvocateProfileComponent,
  ClientComponent,
  HeaderComponent]
