import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Animal, AnimalForm } from '../model';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'animal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})
export class AnimalComponent {
  @Input() set animal(value: Animal) {
    this.animalForm.patchValue({
      id: value.id,
      title: value.title,
      description: value.description
    })
  };

  @Output() onUpdateAnimal = new EventEmitter<Animal>();

  private _fb = inject(FormBuilder);

  animalForm = this._fb.group<AnimalForm>({
    id: new FormControl('4', { nonNullable: true, validators: [Validators.required] }),
    title: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    description: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  })

  updateAnimal = () => {
    this.onUpdateAnimal.emit(this.animalForm.getRawValue())
  }

}
