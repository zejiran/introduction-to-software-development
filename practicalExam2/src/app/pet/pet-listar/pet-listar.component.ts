import { PetDetailComponent } from './../pet-detail/pet-detail.component';
import { Pet } from './../pet';
import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-listar',
  templateUrl: './pet-listar.component.html',
  styleUrls: ['./pet-listar.component.css']
})
export class PetListarComponent implements OnInit {
  pets: Array<Pet>;
  selectedPet: Pet;
  selected = false;

  constructor(private petService: PetService) {}

  getPets(): void {
    this.petService.getPets()
    .subscribe(pets => {
      this.pets = pets;
    });
  }

    onSelected(pet: Pet): void {
      this.petService.getPets()
      .subscribe(pets => {
        this.selectedPet = pets.find(selectedPet => selectedPet.id === pet.id);
      });
      this.selected = true;
    }

  ngOnInit(): void {
    this.getPets();
  }
}
