import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:'project', component: ProjectsComponent},
  {path:'aboutMe', component: AboutMeComponent},
  {path:'portfolio', component: PortfolioComponent},
  {path:'navbar', component: NavbarComponent, canActivate: [AuthGuard]},
  {path:'logout', component: LoginComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
