import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroService } from '../hero.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'toh-hero-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  heroes$ = this.heroService.getHeroes();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

}
