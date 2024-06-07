import { FormControl } from "@angular/forms";

export type Animal = {
    id: string;
    title: string;
    description: string;
}

export type AnimalForm = {
    id: FormControl<string>;
    title: FormControl<string>;
    description: FormControl<string>;
}