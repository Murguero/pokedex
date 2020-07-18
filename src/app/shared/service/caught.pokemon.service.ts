import {Injectable} from '@angular/core';

@Injectable()
export class CaughtPokemonService {
  constructor() {
    if (window.localStorage.getItem('caught-pokemon')) {
      const caught = JSON.parse(window.localStorage.getItem('caught-pokemon'));
      caught.forEach((poke) => this.caught.add(poke));
    }
  }

  update() {
    const json = JSON.stringify([...this.caught]);
    window.localStorage.setItem('caught-pokemon', json);
  }

  caught: Set<number> = new Set<number>();

  add(id: number) {
    this.caught.add(id);
    this.update();
  }

  remove(id: number) {
    this.caught.delete(id);
    this.update();
  }

  has(id: number): boolean {
    return this.caught.has(id);
  }

  get count(): number {
    return this.caught.size;
  }
}
