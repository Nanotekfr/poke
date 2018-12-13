import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from "./pokemons-routing.module";
import { FormsModule } from '@angular/forms';

import { ListPokemonComponent } from './list/list-pokemon.component';
import { DetailPokemonComponent } from './detail/detail-pokemon.component';
import { EditPokemonComponent } from "./edit/edit-pokemon.component";
import { PokemonFormComponent } from "./form/pokemon-form.component";
import { PokemonSearchComponent } from './search/search-pokemon.component';
import { LoaderComponent } from '../loader/loader.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonsService } from './pokemons.service';

import { AuthGuard } from '../auth-guard.service';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		PokemonRoutingModule
	],
	declarations: [
		ListPokemonComponent,
		DetailPokemonComponent,
		PokemonFormComponent,
		EditPokemonComponent,
		PokemonSearchComponent,
		LoaderComponent,
		BorderCardDirective,
		PokemonTypeColorPipe
	],
	providers: [PokemonsService, AuthGuard]
})
export class PokemonsModule { }