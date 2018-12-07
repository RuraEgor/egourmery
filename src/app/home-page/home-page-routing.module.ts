import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageContComponent } from './containers/main-cont/main-cont.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageContComponent,
    data: { title: 'News | Skraps' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
