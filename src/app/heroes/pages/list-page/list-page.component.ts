import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit, OnDestroy {
  public heroes: Hero[] = [];

  constructor(private heroesServices: HeroesService) {}
  ngOnDestroy(): void {
    
  }
  
  ngOnInit(): void {
    this.heroesServices.getHeroes()
    .subscribe( heroes => this.heroes = heroes);
  }


}
