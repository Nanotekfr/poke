import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class PokemonsService {

    private pokemonsUrl = 'api/pokemons';
    
    constructor(private http: HttpClient) { }
    
    /** GET pokemons */
    getPokemons(): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
            tap(_ => this.log(`fetched pokemons`)),
            catchError(this.handleError(`getPokemons`, []))
        );
    }
    
    /** GET pokemon */
    getPokemon(id: number): Observable<Pokemon> {
        const url = `${this.pokemonsUrl}/${id}`; // syntax ES6
        
        return this.http.get<Pokemon>(url).pipe(
            tap(_ => this.log(`fetched pokemon id=${id}`)),
            catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
        );
    }
        
    /** GET types */
    getPokemonTypes(): string[] {
        return ['Acier','Combat','Dragon','Eau','Electrique','Fée','Feu','Glace','Insecte',
        'Normal','Plante','Poison','Psy','Roche','Sol','Spectre','Ténèbre','Vol'];
    }
    
    /** SEARCH pokemon */
    searchPokemons(term: string): Observable<Pokemon[]> {
        if (!term.trim()) {
            return of([]);     
        }

        return this.http.get<Pokemon[]>(`${this.pokemonsUrl}/?name=${term}`).pipe(
            tap(_ => this.log(`found pokemon matching "${term}"`)),
            catchError(this.handleError<Pokemon[]>('searchPokemons', []))
        );
    }

    /** PUT pokemon */
    updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json'})
        };
            
        return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(
            tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
            catchError(this.handleError<any>('updatedPokemon'))
        );
    }
    
    /** DELETE pokemon */
    deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const url = `${this.pokemonsUrl}/${pokemon.id}`;
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json'})
        };
    
        return this.http.delete<Pokemon>(url, httpOptions).pipe(
            tap(_ => this.log(`deleted pokemon id=${pokemon.id}`)),
            catchError(this.handleError<any>('deletePokemon'))
        );
    }

    /* handleError */
    private handleError<T>(operation='operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(error);
            console.log(`${operation} failed: ${error.message}`);
            
            return of(result as T);
        };
    }
    
    /* log */
    private log(log: string) {
        console.info(log);
    }
}