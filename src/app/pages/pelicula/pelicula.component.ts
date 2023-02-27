import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieResponse } from 'src/app/interfaces/MovieResponse';
import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula!: MovieResponse;

  constructor( private activateRouter: ActivatedRoute,
               private peliculasService: PeliculasService,
               private location: Location ) { }

  ngOnInit() {
   const { id } = this.activateRouter.snapshot.params;
   this.peliculasService.getMovieDetails(id)
       .subscribe( movie => {
        console.log(movie);
   this.pelicula = movie;
       })
  }

  onRegresar(){
    this.location.back()
  }

}
