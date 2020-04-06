import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { routes } from './routes';
import { HeaderComponent } from './shared/components/header/header.component';
import { UserService } from './shared/service/user.service';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/share.module';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    SharedModule,
    FlexLayoutModule
  ],
  providers: [{provide: UserService, useClass: UserService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
