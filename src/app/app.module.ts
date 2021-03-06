import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { routes } from './routes';
import { HeaderComponent } from './shared/components/header/header.component';
import { UserService } from './shared/service/user.service';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/share.module';
import { LoginComponent } from './pages/login/login.component';
import { TagListComponent } from './pages/tag-list/tag-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { NewQuestionComponent, TagDialogComponent } from './pages/new-question/new-question.component';
import { TagService } from './shared/service/tag.service';
import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    HomeComponent,
    LoginComponent,
    TagListComponent,
    RegisterComponent,
    NewQuestionComponent,
    TagDialogComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    UserService,
    TagService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
