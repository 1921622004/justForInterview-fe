import { Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TagDetailComponent } from './pages/tag-detail/tag-detail.component';
import { TagListComponent } from './pages/tag-list/tag-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { NewQuestionComponent } from './pages/new-question/new-question.component';
import { AuthGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'feed',
    component: HomeComponent
  },
  {
    path: 'tag/:tagCode',
    component: TagDetailComponent
  },
  {
    path: 'tags',
    component: TagListComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'ask',
    component: NewQuestionComponent,
    canActivate: [AuthGuard]
  }
]