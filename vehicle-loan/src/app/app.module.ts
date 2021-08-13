import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomerRegisterComponent } from './Components/customer/customer-register/customer-register.component';
import { CustomerLoginComponent } from './Components/customer/customer-login/customer-login.component';
import { HomeComponent } from './Components/home/home/home.component';
import { AboutUsComponent } from './Components/about/about-us/about-us.component';

import { ApplyLoanComponent } from './Components/loan/apply-loan/apply-loan.component';
import { FooterComponent } from './Components/home/footer/footer.component';
import { CustomerDashboardComponent } from './Components/customer/customer-dashboard/customer-dashboard.component';
import { LoanOfferComponent } from './Components/loan/loan-offer/loan-offer.component';
import { ApplicationFormComponent } from './Components/loan/application-form/application-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavigationBarComponent } from './Components/navbar/navigation-bar/navigation-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Routes } from '@angular/router';

import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: CustomerLoginComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'customerregister', component: CustomerRegisterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerRegisterComponent,
    CustomerLoginComponent,
    HomeComponent,
    AboutUsComponent,
    ApplyLoanComponent,
    FooterComponent,
    CustomerDashboardComponent,
    LoanOfferComponent,
    ApplicationFormComponent,
    NavigationBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,

    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes),
  ],
  // imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
