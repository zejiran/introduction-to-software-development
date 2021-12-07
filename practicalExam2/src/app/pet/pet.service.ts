import { Pet } from './pet';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private apiUrl = 'https://gist.githubusercontent.com/CesarF/41958f4bc34240b75a83fce876836044/raw/22dbada50bb5e5a18252e5fc3d1f7b858567c828/pets.json';

  constructor(private http: HttpClient) {
  }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.apiUrl);
  }
}
