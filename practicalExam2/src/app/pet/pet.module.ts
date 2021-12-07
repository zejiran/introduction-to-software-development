import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetListarComponent } from './pet-listar/pet-listar.component';
import { PetRoutingModule } from './pet-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PetRoutingModule
  ],
  declarations: [PetListarComponent, PetDetailComponent],
  exports: [PetListarComponent, PetDetailComponent]
})
export class PetModule { }
