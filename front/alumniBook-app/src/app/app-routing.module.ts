import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniComponent } from './alumni/alumni.component';

const routes: Routes = [
  {
    path:'alumni-list', component: AlumniComponent
  },
  {
    path: '**',
    redirectTo: 'alumni-list',
      
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
