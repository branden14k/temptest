import { Routes, RouterModule } from '@angular/router';

//import { DashboardComponent } from './dashboard.component';
//import { HeroesComponent } from './heroes.component';
//import { HeroDetailComponent } from './hero-detail.component';
import { TestComponent } from './test.component'

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/test',
    pathMatch: 'full'
  },
//   {
//     path: 'dashboard',
//     component: DashboardComponent
//   },
//   {
//     path: 'detail/:id',
//     component: HeroDetailComponent
//   },
//   {
//     path: 'heroes',
//     component: HeroesComponent
//   },
  {
    path: 'test',
    component: TestComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [TestComponent];
