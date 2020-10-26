import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { IndustryEquivalencyComponent } from './industry-equivalency/industry-equivalency.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { AdminPortViewComponent } from './admin-port-view/admin-port-view.component';
// import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AdminHomeComponent,
    UserHomeComponent,
    PortfolioComponent,
    UserInfoComponent,
    AboutMeComponent,
    EducationComponent,
    IndustryEquivalencyComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    AdminPortViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    // ChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
