import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Issue } from "../model";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class ApiService {
    private _http = inject(HttpClient);

    getIssues = (): Observable<Issue[]> => {
        return this._http.get<Issue[]>('http://localhost:3000/api')
    }

    getIssue = (id: string): Observable<Issue> => {
        return this._http.get<Issue>(`http://localhost:3000/api/${id}`)
    }

    addIssue = (issue: Issue): Observable<string> => {
        return this._http.post<string>(`http://localhost:3000/api`, issue)
    }

    deleteIssue = (id: string): Observable<void> => {
        return this._http.delete<void>(`http://localhost:3000/api/${id}`)
    }

    updateIssue = (issue: Issue): Observable<void> => {
        return this._http.put<void>(`http://localhost:3000/api/${issue.id}`, issue)
    }
}