import { Component, OnInit } from '@angular/core';
import { Heroes } from '../services/heroes';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  heroForm: Heroes = {
    id: 0,
    name: '',
    superpower: '',
    faction: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private HeroService: HeroesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    })
  }

  getById(id: number) {
    this.HeroService.getById(id).subscribe((data) => {
      this.heroForm = data;
    })
  }

  updateHero() {
    this.HeroService.updateHeroes(this.heroForm)
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
