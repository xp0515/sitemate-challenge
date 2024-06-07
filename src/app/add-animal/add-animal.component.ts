import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Animal, AnimalForm } from '../model';

@Component({
  selector: 'add-animal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-animal.component.html',
  styleUrl: './add-animal.component.css'
})
export class AddAnimalComponent {
  @Output() onAddAnimal = new EventEmitter<Animal>()

  private _fb = inject(FormBuilder);

  animalForm = this._fb.group<AnimalForm>({
    id: new FormControl('4', { nonNullable: true, validators: [Validators.required] }),
    title: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    description: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  })

  addAnimal = () => {
    this.onAddAnimal.emit(this.animalForm.getRawValue());
  }
}
