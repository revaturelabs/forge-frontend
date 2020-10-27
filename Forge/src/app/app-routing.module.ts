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

const routes: Routes = [
  { path: 'login', component: LoginComponent,  },
  { path:'registration', component: RegistrationComponent },
  { path:'user-home', component: UserHomeComponent},
  { path:'', component: LoginComponent},
  { path:'project', component: ProjectsComponent },
  { path:'aboutMe', component: AboutMeComponent },
  { path:'portfolio', component: PortfolioComponent },
  { path:'navbar', component: NavbarComponent},
  { path:'admin-home', component: AdminHomeComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
