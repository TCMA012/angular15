import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroes = new BehaviorSubject<Hero[]>([
    { id: 11, name: 'MA' },
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' },
    { id: 21, name: 'TC' }
  ]);

  getHeroes(): Observable<Hero[]> {
    return this.heroes.asObservable();
  }

  getHero(id: number): Observable<Hero | undefined> {
    return this.heroes.pipe(
      map(heroes => heroes.find(hero => {
        return hero.id == id;
      }))
    );
  }

  updateHero(hero: Hero): void {
    console.log('updateHero', hero);
    this.heroes.next(
      this.heroes.getValue()
        .map(h => h.id === hero.id ? hero : h)
    );
  }

  deleteHero(id: number): void {
    console.log('deleteHero', id);
    this.heroes.next(
      this.heroes.getValue()
        .filter(h => h.id !== id)
    );
  }

  addHero(name: string): Hero {
    const heroes = this.heroes.getValue();
    const maxId = heroes.reduce((max, h) => {
      if (h.id > max) {
        max = h.id;
      }
      return max;
    }, 0);
    console.log(`maxId: ${maxId}`);
    const hero = { id: maxId + 1, name };
    this.heroes.next(
      [...heroes, hero]
    );
    return hero;
  }

  constructor(private http: HttpClient) { }
}
