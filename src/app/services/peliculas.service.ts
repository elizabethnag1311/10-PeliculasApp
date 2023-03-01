import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { CarteleraResponse, Movie } from '../interfaces/CarteleraResponse';
import { Cast, CreditsResponse } from '../interfaces/CreditsResponse';
import { MovieResponse } from '../interfaces/MovieResponse';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando: boolean = false;

  constructor( private http: HttpClient) { }
    
    get params() {
      return {
        api_key: '6b17f8964348e6172577bedab210f857',
        language: 'es-ES',
        page: this.carteleraPage
      }
    }
    
    resetCarteleraPage(){
      this.carteleraPage = 1;
    }

  getCartelera():Observable<Movie[]>{
    if (this.cargando) {
      return of([]);
    }
    
    this.cargando = true;
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`,{
      params: this.params
    }).pipe(
       map( (resp) => resp.results ),
       tap( (results) => {
        const originalTitles = results.map( ( result ) => {
          return result.original_title;
        });
        console.log(originalTitles);
       }),
       tap( () => {
        this.carteleraPage += 1;
        this.cargando = false;
      })
    )
  }

  buscarPeliculas( texto: string ): Observable<Movie[]> {
    const params = { ...this.params, page: '1', query: texto };
    //https://api.themoviedb.org/3/search/movie
    return this.http.get<CarteleraResponse>(`${ this.baseUrl }/search/movie`, {
      params
    }).pipe(
      map( resp => resp.results )
    )
  }

  getMovieDetails( id:string ){
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/${ id }`,{
      params: this.params
    }).pipe(
      catchError( err => of(null) )
    )
  }
  getCast( id:string ){
    return this.http.get<CreditsResponse>(`${this.baseUrl}/movie/${ id }/credits`,{
      params: this.params
    }).pipe(
      map( resp => resp.cast),
      catchError( err => of(null) )
    )
  }
}
