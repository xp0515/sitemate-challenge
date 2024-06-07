import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, EMPTY } from 'rxjs';
import { ApiService } from '../services/api.service';
import { IssuesActions } from './issues.action';

@Injectable()
export class IssuesEffects {

    private actions$ = inject(Actions);
    private apiService = inject(ApiService);

    loadIssues$ = createEffect(() => this.actions$.pipe(

    )
    );

}