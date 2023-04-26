import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../services/heroes.service';
import { Heroes } from '../services/heroes';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Heroes[] = [];
  deleteModal: any;
  idToDelete: number = 0;
  constructor(private heroService : HeroesService) { }

  ngOnInit() :void {
    this.getHeroes();
  }
  getHeroes() {
    this.heroService.getHeroes().subscribe((data) => {
      this.heroes = data;
    });
  }

}
