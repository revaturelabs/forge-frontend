import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {RegistrationComponent}from './registration/registration.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AuthGuard } from './guards/auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectsComponent } from './projects/projects.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminPortViewComponent } from './admin-port-view/admin-port-view.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent,  },
  { path:'registration', component: RegistrationComponent },
  { path:'user-home', component: UserHomeComponent},
  { path:'', component: LoginComponent},
  { path:'project', component: ProjectsComponent },
  { path:'aboutMe', component: AboutMeComponent },
  { path:'portfolio', component: PortfolioComponent },
  { path:'portfolio/:id', component: PortfolioComponent },
  { path:'navbar', component: NavbarComponent},
  { path:'admin-home', component: AdminHomeComponent},
  {path: 'viewPortfolio/:id', component: AdminPortViewComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
