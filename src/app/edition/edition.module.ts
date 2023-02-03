import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EditionRoutingModule } from './edition-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AboutMeComponent } from './pages/about-me/about-me.component';
import { FormAboutMeComponent } from './components/form-about-me/form-about-me.component';
import { FormProjectComponent } from './components/form-project/form-project.component';
import { FormSkillComponent } from './components/form-skill/form-skill.component';
import { FormStudyComponent } from './components/form-study/form-study.component';
import { MainComponent } from './pages/main/main.component';
import { ProjectCreateComponent } from './pages/project-create/project-create.component';
import { ProjectEditComponent } from './pages/project-edit/project-edit.component';
import { SkillCreateComponent } from './pages/skill-create/skill-create.component';
import { StudyCreateComponent } from './pages/study-create/study-create.component';
import { StudyEditComponent } from './pages/study-edit/study-edit.component';

@NgModule({
   declarations: [
      AboutMeComponent,
      FormAboutMeComponent,
      FormProjectComponent,
      FormSkillComponent,
      FormStudyComponent,
      MainComponent,
      ProjectCreateComponent,
      ProjectEditComponent,
      SkillCreateComponent,
      StudyCreateComponent,
      StudyEditComponent,
   ],
   imports: [
      CommonModule,
      EditionRoutingModule,
      SharedModule,
      ReactiveFormsModule,
   ],
})
export class EditionModule {}
