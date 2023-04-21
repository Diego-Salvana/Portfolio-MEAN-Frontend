import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './pages/login/login.component';

@NgModule({
   declarations: [LoginComponent],
   imports: [CommonModule, AuthRoutingModule, SharedModule]
})
export class AuthModule {}
