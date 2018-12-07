import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    loadChildren: './home-page/home-page.module#HomePageModule',
    data: { title: 'Home Page' },
  }
];

@NgModule({
  imports: [
    MatDialogModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
