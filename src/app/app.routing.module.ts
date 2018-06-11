import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './client/home/home.component';
import { LoginPageComponent } from './client/login-page/login-page.component';
import { AdminAuthGuard } from './core/admin-auth.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  // {
  //   path: '',
  //   component: AdminComponent,
  //   canActivate: [ AuthGuard ],
  //   children: [
  //     {
  //       path: '',
  //       component: UserDashBoardComponent,
  //       pathMatch: 'full'
  //     },
  //     {
  //       path: 'keyword-rankings',
  //       component: KeywordsComponent
  //     },
  //     {
  //       path: 'traffic',
  //       component: TrafficReportComponent
  //     },
  //     {
  //       path: 'traffic/adwords',
  //       component: AdwordsComponent
  //     },
  //     {
  //       path: 'traffic/goals',
  //       component: GoalsComponent
  //     },      
  //     {
  //       path: 'time-report',
  //       component: TimeReportComponent
  //     },
  //     {
  //       path: 'social',
  //       component: SocialMediaComponent
  //     },      
  //     {
  //       path: 'messages',
  //       component: TwInboxComponent
  //     },     
  //     {
  //       path: 'user-manager',
  //       component: UserManagerComponent,
  //       canActivate: [ AdminAuthGuard ],
  //     },
  //     {
  //       path: 'profile',
  //       component: UserProfileComponent
  //     },  
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
