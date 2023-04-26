import { Component, OnInit } from '@angular/core';
import { Hero } from '../services/hero';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

heroes: Hero[]=[];

  constructor(private heroService : HeroesService) { }

  ngOnInit() :void {
    this.getHeroes();
  }
  getHeroes() {
    this.heroService.getHeroes().subscribe((data) => {
      this.heroes = data;
    });
  }
  deleteHeroes(id: number) {
    this.heroService.deleteHeros(id)
    .subscribe(hero => {
      this.getHeroes();
    })
    }

}
