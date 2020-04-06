import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routes } from './routes';
import { HeaderComponent } from './shared/components/header/header.component';
import { UserService } from './shared/service/user.service';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/share.module';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{provide: UserService, useClass: UserService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
