import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { SetHeadersInterceptor } from './interceptors/set-headers.interceptor';

@NgModule({
   declarations: [AppComponent],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      AppRoutingModule,
      HomeModule,
      PrimeNgModule,
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideStorage(() => getStorage()),
   ],
   providers: [{ provide: HTTP_INTERCEPTORS, useClass: SetHeadersInterceptor, multi: true }],
   bootstrap: [AppComponent],
})
export class AppModule {}
