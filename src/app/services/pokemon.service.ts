import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { PokemonData } from '../models/pokemonData'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL:string = ""
  private pokeData: PokemonData | any

  constructor(
    private http:HttpClient) { 
    this.baseURL = environment.pokeApi
  }

  getPokemon(pokemonName:string):Observable<PokemonData>{
    const url = `${this.baseURL}${pokemonName}`;
    console.log(`Fetching data from: ${url}`); // Log da URL para depuração
    return this.http.get<PokemonData>(url);
  }
}
