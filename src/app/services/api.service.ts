import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Animal } from "../model";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class ApiService {
    private _http = inject(HttpClient);

    getAnimals = (): Observable<Animal[]> => {
        return this._http.get<Animal[]>('http://localhost:3000/api')
    }

    getAnimal = (id: string): Observable<Animal> => {
        return this._http.get<Animal>(`http://localhost:3000/api/${id}`)
    }

    addAnimal = (animal: Animal): Observable<string> => {
        return this._http.post<string>(`http://localhost:3000/api`, animal)
    }

    deleteAnimal = (id: string): Observable<void> => {
        return this._http.delete<void>(`http://localhost:3000/api/${id}`)
    }

    updateAnimal = (animal: Animal): Observable<void> => {
        return this._http.put<void>(`http://localhost:3000/api`, animal)
    }
}