import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../model';
import { ApiService } from '../services/api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { AnimalComponent } from '../animal/animal.component';
import { AddAnimalComponent } from '../add-animal/add-animal.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'animal-list',
  standalone: true,
  imports: [AddAnimalComponent, AnimalComponent, AsyncPipe, NgFor],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent implements OnInit {
  animals$?: Observable<Animal[]>;

  private _apiSvc = inject(ApiService);
  private _destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.animals$ = this._apiSvc.getAnimals().pipe(takeUntilDestroyed(this._destroyRef));
  }

  addAnimal = (animal: Animal) => {
    this._apiSvc.addAnimal(animal).pipe(takeUntilDestroyed(this._destroyRef)).subscribe();
  }

  updateAnimal = (animal: Animal) => {
    this._apiSvc.updateAnimal(animal).pipe(takeUntilDestroyed(this._destroyRef)).subscribe();
    console.warn(animal)
  }
}
