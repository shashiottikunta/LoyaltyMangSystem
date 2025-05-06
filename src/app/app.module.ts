import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Required for Notifier
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './theme/sidebar/sidebar.component';
import { HeaderComponent } from './theme/header/header.component';
import { LayoutComponent } from './theme/layout/layout.component';
import { LoginComponent } from './theme/login/login.component';
import { DashboardComponent } from './theme/dashboard/dashboard.component';
import { CutomersListComponent } from './theme/customers/cutomers-list/cutomers-list.component';
import { CustomerAddComponent } from './theme/customers/customer-add/customer-add.component';
import { TransctionListComponent } from './theme/transctions/transction-list/transction-list.component';
import { RewardsListComponent } from './theme/rewards/rewards-list/rewards-list.component';
import { LoyaltyProgramListComponent } from './theme/loyalty-programs/loyalty-program-list/loyalty-program-list.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { TestComponent } from './theme/test/test.component';
import { TransctionAddComponent } from './theme/transctions/transction-add/transction-add.component';
import { LoyaltyAddComponent } from './theme/loyalty-programs/loyalty-add/loyalty-add.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './theme/core/interceptors/http.interceptor';
import { MyRewardsComponent } from './theme/my-rewards/my-rewards.component';
import { ChangePasswordComponent } from './theme/change-password/change-password.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    LayoutComponent,
    LoginComponent,
    DashboardComponent,
    CutomersListComponent,
    CustomerAddComponent,
    TransctionListComponent,
    RewardsListComponent,
    LoyaltyProgramListComponent,
    TestComponent,
    TransctionAddComponent,
    LoyaltyAddComponent,
    MyRewardsComponent,
    ChangePasswordComponent
  ],
  imports: [
    ReactiveFormsModule,FormsModule ,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 2000,
    	preventDuplicates: true,
      maxOpened: 1
    }),
    
     ],
  providers: [  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
