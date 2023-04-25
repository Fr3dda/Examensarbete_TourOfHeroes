import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroes } from './heroes';

@Injectable({
    providedIn: "root",
})

export class HeroesService {

constructor(private http : HttpClient) { }


getHeroes() {
    return this.http.get<Heroes[]>("http://localhost:3000/heroes")
}
}
