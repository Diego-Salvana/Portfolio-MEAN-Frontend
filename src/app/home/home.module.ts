import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';

import { AboutMeComponent } from './components/about-me/about-me.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { FooterComponent } from './components/footer/footer.component';
import { HardSkillsComponent } from './components/skills/hard-skills/hard-skills.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ModalFormComponent } from './components/skills/modal-form/modal-form.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ModalMenuComponent } from './components/modal-menu/modal-menu.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { LayoutCardComponent } from './components/layout-card/layout-card.component';

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
      ModalFormComponent,
      SpinnerComponent,
      ModalMenuComponent,
      LayoutsComponent,
      LayoutCardComponent,
   ],
   imports: [CommonModule, RouterModule, SharedModule],
   providers: [{ provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }],
   exports: [HomePageComponent],
})
export class HomeModule {}
