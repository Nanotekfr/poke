import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from "../mock-pokemons";
import { Router } from '@angular/router';
import { PokemonsService } from "../pokemons.service";


@Component({
	selector: 'list-pokemon',
	templateUrl: `./app/pokemons/list/list-pokemon.component.html`
})
export class ListPokemonComponent implements OnInit { 
    pokemons: Pokemon[] = null;
    
	constructor(private router: Router, private pokemonsService: PokemonsService) { }

	ngOnInit() {
		this.getPokemons();
	}

	getPokemons(): void {
		this.pokemonsService.getPokemons()
		.subscribe(pokemons => this.pokemons = pokemons);
	}
	selectPokemon(pokemon: Pokemon) {
        console.log("Vous avec cliquer sur " + pokemon.name)
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
	}
}