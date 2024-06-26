import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MainComponent } from './pages/main/main.component';
import { ProjectCreateComponent } from './pages/project-create/project-create.component';
import { ProjectEditComponent } from './pages/project-edit/project-edit.component';
import { SkillCreateComponent } from './pages/skill-create/skill-create.component';

const routes: Routes = [
   { path: '', redirectTo: '/', pathMatch: 'full' },
   {
      path: 'edit',
      component: MainComponent,
      children: [
         { path: 'aboutme', component: AboutMeComponent },
         { path: 'project/:id', component: ProjectEditComponent },
         { path: '**', redirectTo: '/', pathMatch: 'full' },
      ],
   },
   {
      path: 'create',
      component: MainComponent,
      children: [
         { path: 'project', component: ProjectCreateComponent },
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
