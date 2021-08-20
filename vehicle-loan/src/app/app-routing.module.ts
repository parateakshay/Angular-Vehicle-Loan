import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './Components/about/about-us/about-us.component';
import { AdminDashboardComponent } from './Components/admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './Components/admin/admin-login/admin-login.component';
import { CustomerDashboardComponent } from './Components/customer/customer-dashboard/customer-dashboard.component';
import { CustomerHomeComponent } from './Components/customer/customer-home/customer-home.component';
import { CustomerLoginComponent } from './Components/customer/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './Components/customer/customer-register/customer-register.component';
import { HomeComponent } from './Components/home/home/home.component';
import { ApplicationFormComponent } from './Components/loan/application-form/application-form.component';
import { ApplyLoanComponent } from './Components/loan/apply-loan/apply-loan.component';
import { EmiCalculatorComponent } from './Components/loan/emi-calculator/emi-calculator.component';
import { LoanOfferComponent } from './Components/loan/loan-offer/loan-offer.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'login',component:CustomerLoginComponent},
  {path:'home',component:HomeComponent},
  {path:'customerHome',component:CustomerHomeComponent},
  {path:'application-loan',component:ApplicationFormComponent},
  {path:'loan-offer',component:LoanOfferComponent},
  {path:'apply-loan',component:ApplyLoanComponent},
  {path:'customer-dashboard',component:CustomerDashboardComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'customer-home',component:CustomerHomeComponent},
  {path:'customer-register',component:CustomerRegisterComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'emi-calculator',component:EmiCalculatorComponent},
  {path:'test',component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
