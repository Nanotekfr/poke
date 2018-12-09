import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './pokemon';
/*
 * Affiche la couleur correspondant au type du pokémon.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 *   {{ pokemon.type | pokemonTypeColor }}
*/
@Pipe({name: 'pokemonTypeColor'})
export class PokemonTypeColorPipe implements PipeTransform {
    transform(type: string): string {

    let color: string;

    switch (type) {
        case 'Acier':
        color = 'grey lighten-1';
        break;
        case 'Combat':
        color = 'brown lighten-1';
        break;
        case 'Dragon':
        color = 'indigo lighten-3';
        break;
        case 'Eau':
        color = 'blue lighten-1';
        break;
        case 'Electrik':
        color = 'lime accent-1';
        break;
        case 'Fée':
        color = 'pink lighten-4';
        break;
        case 'Feu':
        color = 'red lighten-1';
        break;
        case 'Glace':
        color = 'light-blue lighten-5'
        break;
        case 'Insecte':
        color = 'green lighten-3';
        break;
        case 'Normal':
        color = 'grey lighten-3';
        break;
        case 'Plante':
        color = 'green lighten-1';
        break;
        case 'Poison':
        color = 'deep-purple accent-2';
        break;
        case 'Psy':
        color = 'deep-purple darken-2';
        break;
        case 'Roche':
        color = 'brown lighten-1';
        break;
        case 'Sol':
        color = 'amber darken-2';
        break;
        case 'Spectre':
        color = '#1a237e indigo darken-4';
        break;
        case 'Tenebre':
        color = 'grey darken-4';
        break;
        case 'Vol':
        color = 'blue lighten-3';
        break;
        default:
        color = 'grey';
        break;
    }

    return 'chip ' + color;

    }
}