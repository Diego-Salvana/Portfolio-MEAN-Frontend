import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { AboutMeComponent } from './components/about-me/about-me.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { FooterComponent } from './components/footer/footer.component';
import { HardSkillsComponent } from './components/skills/hard-skills/hard-skills.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SoftSkillsComponent } from './components/skills/soft-skills/soft-skills.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ModalFormComponent } from './components/skills/modal-form/modal-form.component';

@NgModule({
   declarations: [
      AboutMeComponent,
      CardProjectComponent,
      FooterComponent,
      HardSkillsComponent,
      HeaderComponent,
      HomePageComponent,
      NavBarComponent,
      ProjectsComponent,
      SkillsComponent,
      SoftSkillsComponent,
      StudiesComponent,
      ModalFormComponent,
   ],
   imports: [CommonModule, RouterModule, ReactiveFormsModule, SharedModule],
   exports: [HomePageComponent],
})
export class HomeModule {}
