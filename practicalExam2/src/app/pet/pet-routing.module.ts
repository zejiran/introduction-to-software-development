import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetListarComponent } from './pet-listar/pet-listar.component';

const routes: Routes = [{
  path: 'pets',
  children: [
    {
      path: 'list',
      component: PetListarComponent
    },
    {
      path: ':id',
      component: PetDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PetRoutingModule {
}
