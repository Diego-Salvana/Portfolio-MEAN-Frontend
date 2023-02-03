import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

import { AppComponent } from './app.component';

@NgModule({
   declarations: [AppComponent],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      AppRoutingModule,
      HomeModule,
      PrimeNgModule,
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
