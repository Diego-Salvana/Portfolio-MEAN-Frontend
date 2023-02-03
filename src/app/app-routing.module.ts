import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home/pages/home-page/home-page.component';

const routes: Routes = [
   { path: '', component: HomePageComponent },
   {
      path: 'auth',
      loadChildren: () =>
         import('./auth/auth.module').then((m) => m.AuthModule),
   },
   {
      path: 'edition',
      loadChildren: () =>
         import('./edition/edition.module').then((m) => m.EditionModule),
   },
   { path: '**', redirectTo: '' },
];

const routerOptions: ExtraOptions = {
   anchorScrolling: 'enabled',
   scrollPositionRestoration: 'enabled',
};

@NgModule({
   imports: [RouterModule.forRoot(routes, routerOptions)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
