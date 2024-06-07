import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Issue, IssueForm } from '../model';

@Component({
  selector: 'add-issue',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-issue.component.html',
  styleUrl: './add-issue.component.css'
})
export class AddIssueComponent {
  @Output() onAddIssue = new EventEmitter<Issue>()

  private _fb = inject(FormBuilder);

  issueForm = this._fb.group<IssueForm>({
    id: new FormControl('4', { nonNullable: true, validators: [Validators.required] }),
    title: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    description: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  })

  addIssue = () => {
    this.onAddIssue.emit(this.issueForm.getRawValue());
  }
}
