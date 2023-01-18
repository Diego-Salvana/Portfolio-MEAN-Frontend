import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
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
   ],
   imports: [CommonModule, PrimeNgModule, SharedModule],
   exports: [HomePageComponent],
})
export class HomeModule {}
