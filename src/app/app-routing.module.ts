import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { EditionGuard } from './guards/edition.guard';
import { HomeGuard } from './guards/home.guard';
import { HomePageComponent } from './home/pages/home-page/home-page.component';

const routes: Routes = [
   {
      path: '', component: HomePageComponent,
      canActivate: [ HomeGuard ],
   },
   {
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
      canLoad: [ AuthGuard ],
      canActivate: [ AuthGuard ]
   },
   {
      path: 'edition',
      loadChildren: () => import('./edition/edition.module').then((m) => m.EditionModule),
      canLoad: [ EditionGuard ],
      canActivate: [ EditionGuard ]
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
