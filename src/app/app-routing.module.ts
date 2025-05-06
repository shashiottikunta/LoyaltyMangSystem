import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './theme/layout/layout.component';
import { LoginComponent } from './theme/login/login.component';
import { DashboardComponent } from './theme/dashboard/dashboard.component';
import { CutomersListComponent } from './theme/customers/cutomers-list/cutomers-list.component';
import { CustomerAddComponent } from './theme/customers/customer-add/customer-add.component';
import { TransctionListComponent } from './theme/transctions/transction-list/transction-list.component';
import { RewardsListComponent } from './theme/rewards/rewards-list/rewards-list.component';
import { LoyaltyProgramListComponent } from './theme/loyalty-programs/loyalty-program-list/loyalty-program-list.component';
import { TestComponent } from './theme/test/test.component';
import { TransctionAddComponent } from './theme/transctions/transction-add/transction-add.component';
import { LoyaltyAddComponent } from './theme/loyalty-programs/loyalty-add/loyalty-add.component';
import { MyRewardsComponent } from './theme/my-rewards/my-rewards.component';
import { ChangePasswordComponent } from './theme/change-password/change-password.component';


const routes: Routes = [{path: 'login', component: LoginComponent},
{path:'test',component:TestComponent},
{
  path: '',
  
  component: LayoutComponent,
  children: [
    {path: 'dashboard', component: DashboardComponent},
    {path:'customers-list',component:CutomersListComponent},
    {path: 'customer-add', component: CustomerAddComponent},
    {path:'transctions-list',component:TransctionListComponent},
    {path: 'transction-add', component: TransctionAddComponent},

    {path:'rewards-list',component:RewardsListComponent},
    {path:'loyalty-programs-list',component:LoyaltyProgramListComponent},
    {path:'loyalty-add',component:LoyaltyAddComponent},
    {path:'my-rewards',component:MyRewardsComponent},
    {path:'password',component:ChangePasswordComponent},
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
