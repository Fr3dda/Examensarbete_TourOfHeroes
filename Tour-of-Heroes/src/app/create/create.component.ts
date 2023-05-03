import { Component, OnInit } from '@angular/core';
import { Heroes } from '../services/heroes';
import { HeroesService } from '../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  heroForm: Heroes = {
    id: 0,
    name: '',
    superpower:'',
    faction: ''
  };


  constructor
  (
    private heroSerivce : HeroesService,
    private router: Router
    ) {}

  ngOnInit(): void {
  }

  createHero() {
    this.heroSerivce.createHeroes(this.heroForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/heroes"])
      },
      error:(err) => {
        console.log(err)
      }
    })
  }

}
