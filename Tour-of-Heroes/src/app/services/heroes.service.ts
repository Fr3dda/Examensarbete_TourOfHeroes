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
createHeroes(payload: Heroes) {
    return this.http.post<Heroes>('http://localhost:3000/heroes', payload);
}
deleteHeros( id: number ) {
    return this.http.delete<Heroes>(`http://localhost:3000/heroes/${id}`)
}

getById( id : number ) {
    return this.http.get<Heroes>(`http://localhost:3000/heroes/${id}`);
}
updateHeroes( payload: Heroes) {
    return this.http.put(`http://localhost:3000/heroes/${payload.id}`, payload)
}
}
