import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroService } from '../hero.service';
import { map } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'toh-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [CommonModule, RouterLink],
})
export class DashboardComponent implements OnInit {
  heroes$ = this.heroService.getHeroes().pipe(map(heroes => heroes.slice(0, 5)));

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

}
