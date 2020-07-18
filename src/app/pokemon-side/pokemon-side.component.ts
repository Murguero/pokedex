import { Component, Input } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon';

import {CaughtPokemonService} from '../shared/service/caught.pokemon.service';

@Component({
  selector: 'pokemon-side',
  templateUrl: './pokemon-side.component.html',
  styleUrls: ['./pokemon-side.component.scss']
})
export class PokemonSideComponent {
  loaded: boolean = false;

  @Input('pokemon') pokemon: Pokemon;

  constructor(
    private caughtPokemon: CaughtPokemonService,
  ) {
  }

  onChange(e, pokemon) {
    if (e.target.checked) {
      this.caughtPokemon.add(pokemon.id);
    } else {
      this.caughtPokemon.remove(pokemon.id);
    }
  }

}
