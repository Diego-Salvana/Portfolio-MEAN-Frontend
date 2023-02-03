import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MainComponent } from './pages/main/main.component';
import { ProjectCreateComponent } from './pages/project-create/project-create.component';
import { ProjectEditComponent } from './pages/project-edit/project-edit.component';
import { SkillCreateComponent } from './pages/skill-create/skill-create.component';
import { StudyCreateComponent } from './pages/study-create/study-create.component';
import { StudyEditComponent } from './pages/study-edit/study-edit.component';

const routes: Routes = [
   { path: '', redirectTo: '/', pathMatch: 'full' },
   {
      path: 'edit',
      component: MainComponent,
      children: [
         { path: 'aboutme', component: AboutMeComponent },
         { path: 'project/:id', component: ProjectEditComponent },
         { path: 'study/:id', component: StudyEditComponent },
         { path: '**', redirectTo: '/', pathMatch: 'full' },
      ],
   },
   {
      path: 'create',
      component: MainComponent,
      children: [
         { path: 'project', component: ProjectCreateComponent },
         { path: 'study', component: StudyCreateComponent },
         { path: 'skill', component: SkillCreateComponent },
         { path: '**', redirectTo: '/', pathMatch: 'full' },
      ],
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class EditionRoutingModule {}
