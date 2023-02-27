import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Movie } from 'src/app/interfaces/CarteleraResponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public movies: Movie[] = [];
  public moviesSlideShow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    const pos    = (document.documentElement.scrollTop || document.body.scrollTop) + 1000;
    const posMax = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if ( pos > posMax ) {
      if (this.peliculasService.cargando) {
        return;
      }
      this.peliculasService.getCartelera()
      .subscribe( movies => {
        this.movies.push(...movies)
      });
    }
    
  }

  constructor( private peliculasService: PeliculasService) { }

  ngOnInit(){

    this.peliculasService.getCartelera()
    .subscribe( movies => {
      // console.log( resp ); 
      this.movies = movies; 
      this.moviesSlideShow = movies;
    })
  }

  ngOnDestroy(){
    this.peliculasService.resetCarteleraPage()
  }

}
