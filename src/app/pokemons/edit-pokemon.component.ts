import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';

@Component({
    selector: 'edit-pokemon',
    templateUrl: './app/pokemons/edit-pokemon.component.html'
})
export class EditPokemonComponent implements OnInit {

    pokemon: Pokemon = null;

    constructor(
        private route: ActivatedRoute,
        private pokemonsService: PokemonsService) {}

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this.pokemonsService.getPokemon(id)
		.subscribe(pokemon => this.pokemon = pokemon);
    }

}