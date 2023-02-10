import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Movie } from 'src/app/interfaces/CarteleraResponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];

  constructor( private peliculasService: PeliculasService) { }

  ngOnInit(){

    this.peliculasService.getCartelera()
    .subscribe( resp => {
      // console.log( resp ); 
      this.movies = resp.results; 
    })
  }

}
