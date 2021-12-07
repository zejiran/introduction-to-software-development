import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  @Input() pet: Pet;

  constructor(private petService: PetService) {}

  getPet(id: number): void {
    this.petService.getPets()
    .subscribe(pets => {
      this.pet = pets.find(pet => pet.id === id);
    });
  }

  ngOnInit(): void {
  }
}
