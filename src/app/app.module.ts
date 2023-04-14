import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
 import {MatSelectModule }from '@angular/material/select';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { HeaderComponent } from './header/header.component';
// import { LoginComponent } from './login/login.component';
// import { SpashComponent } from './spash/spash.component';
// import { SplashComponent } from './splash/splash.component';
// import { MenuComponent } from './menu/menu.component';
// import { AdvocateComponent } from './advocate/advocate.component';
// import { ClientComponent } from './client/client.component';
// import { NewcaseComponent } from './newcase/newcase.component';
// import { ReportComponent } from './report/report.component';
// import { AdvocateProfileComponent } from './advocate-profile/advocate-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
    // HeaderComponent,
    // LoginComponent,
    // SpashComponent,
    // SplashComponent,
    // MenuComponent,
    // AdvocateComponent,
    // ClientComponent,
    // NewcaseComponent,
    // ReportComponent,
    // AdvocateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
