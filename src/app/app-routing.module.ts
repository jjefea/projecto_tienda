import { UsersComponent } from './@admin/pages/users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
  // la ruta comodin debe estar debajo

];
@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true,
      scrollPositionRestoration: 'top'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
