import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Issue } from '../model';
import { ApiService } from '../services/api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { IssueComponent } from '../issue/issue.component';
import { AddIssueComponent } from '../add-issue/add-issue.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'issue-list',
  standalone: true,
  imports: [AddIssueComponent, IssueComponent, AsyncPipe, NgFor],
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css'
})
export class IssueListComponent implements OnInit {
  issues$?: Observable<Issue[]>;

  private _apiSvc = inject(ApiService);
  private _destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.issues$ = this._apiSvc.getIssues().pipe(takeUntilDestroyed(this._destroyRef));
  }

  addIssue = (issue: Issue) => {
    this._apiSvc.addIssue(issue).pipe(takeUntilDestroyed(this._destroyRef)).subscribe();
  }

  updateIssue = (issue: Issue) => {
    this._apiSvc.updateIssue(issue).pipe(takeUntilDestroyed(this._destroyRef)).subscribe();
  }

  deleteIssue = (id: string) => {
    this._apiSvc.deleteIssue(id).pipe(takeUntilDestroyed(this._destroyRef)).subscribe();
  }
}
