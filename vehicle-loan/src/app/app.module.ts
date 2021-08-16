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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import {AngularFireStorageModule} from '@angular/fire/storage'
import {AngularFireModule} from '@angular/fire'

import { CustomerHomeComponent } from './Components/customer/customer-home/customer-home.component';
import { AdminDashboardComponent } from './Components/admin/admin-dashboard/admin-dashboard.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminLoginComponent } from './Components/admin/admin-login/admin-login.component';
import { EmiCalculatorComponent } from './Components/loan/emi-calculator/emi-calculator.component';

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
    CustomerHomeComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    EmiCalculatorComponent,
  ],
  imports: [

    BrowserModule,
    Ng2SearchPipeModule,  
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatTabsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    AngularFireStorageModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDFInHTz0JlwPO0JvpQYyNqgzCd2ii9U28",
      authDomain: "vehicle-loan-f7f94.firebaseapp.com",
      databaseURL: "https://vehicle-loan-f7f94-default-rtdb.firebaseio.com/",
      projectId: "vehicle-loan-f7f94",
      storageBucket: "vehicle-loan-f7f94.appspot.com",
      messagingSenderId: "270861173311",
      appId: "1:270861173311:web:4404a3caa0bd9637832e8a",
      measurementId: "G-VXM2MT3YSM"
    })
  ],
  // imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
