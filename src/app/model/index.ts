import { FormControl } from "@angular/forms";

export type Issue = {
    id: string;
    title: string;
    description: string;
}

export type IssueForm = {
    id: FormControl<string>;
    title: FormControl<string>;
    description: FormControl<string>;
}