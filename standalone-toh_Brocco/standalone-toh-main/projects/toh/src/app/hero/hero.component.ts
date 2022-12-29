import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { map, switchMap } from 'rxjs';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';

type Mode = 'view' | 'edit' | 'add';

@Component({
  selector: 'toh-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  hero$ = this.route.params.pipe(
    map(params => params['id']),
    switchMap(id => this.heroService.getHero(id))
  );

  mode: Mode = 'view';
  heroName = '';

  constructor(private heroService: HeroService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  setMode(mode: Mode) {
    this.mode = mode;
    console.log('setMode mode', mode);
  }

  editHero(hero: Hero) {
    this.heroName = hero.name;
    this.setMode('edit');
    console.log('editHero hero', hero);
  }

  saveHero(id: number | undefined, name: string) {
    console.log('saveHero id', id, 'name', name);
    if (id === undefined) {
      const hero = this.heroService.addHero(name);
      this.router.navigateByUrl(`hero/${hero.id}`);
    } else {
      this.heroService.updateHero({ id, name });
    }
    this.setMode('view');
  }

}
