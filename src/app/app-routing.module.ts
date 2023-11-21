import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'profiles',
    component: ProfilesComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
