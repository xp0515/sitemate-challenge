import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Issue, IssueForm } from '../model';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'issue',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './issue.component.html',
  styleUrl: './issue.component.css'
})
export class IssueComponent {
  @Input() set issue(value: Issue) {
    this.issueForm.patchValue({
      id: value.id,
      title: value.title,
      description: value.description
    })
    this.issueForm.disabled;
  };

  @Output() onUpdateIssue = new EventEmitter<Issue>();
  @Output() onDeleteIssue = new EventEmitter<string>();

  private _fb = inject(FormBuilder);

  issueForm = this._fb.group<IssueForm>({
    id: new FormControl('4', { nonNullable: true, validators: [Validators.required] }),
    title: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    description: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  })

  updateIssue = (): void => {
    this.onUpdateIssue.emit(this.issueForm.getRawValue())
  }

  deleteIssue = (): void => {
    this.onDeleteIssue.emit(this.issueForm.value.id)
  }

}
