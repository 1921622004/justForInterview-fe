import { Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TagDetailComponent } from './pages/tag-detail/tag-detail.component';

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
  }
]