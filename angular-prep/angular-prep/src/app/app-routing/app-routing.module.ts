import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppShellComponent } from '../app-shell/app-shell.component';
import { LoginComponent } from '../login/login.component';
import { AuthGurad } from '../route-guard/auth-guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    canActivate: [AuthGurad],
    component: AppShellComponent,
    children: [
      {
        path: 'hero-list',
        loadChildren: () =>
          import('../hero/hero.module').then((module) => module.HeroModule),
      },
      {
        path: 'hero-detail/:id',
        loadChildren: () =>
          import('../hero/hero-detail/hero-detail.module').then(
            (module) => module.HeroDetailModule
          ),
      },
      {
        path: 'crisis-center',
        loadChildren: () =>
          import('../crisis-center/crisis-center.module').then(
            (module) => module.CrisisCenterModule
          ),
      },
      { path: '', redirectTo: '/hero-list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
