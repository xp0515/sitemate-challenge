import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { Animal } from './model';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';
import { AnimalListComponent } from './animal-list/animal-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AnimalListComponent, AsyncPipe, NgFor, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'challenge';
  // animals$?: Observable<Animal[]>;
  // animal$?: Observable<Animal>;


  // ngOnInit(): void {
  //   this.animals$ = this._apiSvc.getAnimals();
  //   this.animal$ = this._apiSvc.getAnimal('1');
  //   this._apiSvc.saveAnimal({
  //     id: '5',
  //     title: 'Star',
  //     description: 'Corgi'
  //   }).subscribe()
  // }
}
