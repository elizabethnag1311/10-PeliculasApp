import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Cast } from 'src/app/interfaces/CreditsResponse';
import { MovieResponse } from 'src/app/interfaces/MovieResponse';
import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula!: MovieResponse;
  public cast: Cast[] = [] ;

  constructor( private activateRouter: ActivatedRoute,
               private peliculasService: PeliculasService,
               private location: Location,
               private router: Router ) { }

  ngOnInit() {
   const { id } = this.activateRouter.snapshot.params;

   combineLatest([
    this.peliculasService.getMovieDetails(id),
    this.peliculasService.getCast( id )

  ]).subscribe( ([pelicula, cast]) => {
    if (!pelicula) {
      this.router.navigateByUrl('/home');
      return;
    }
    this.pelicula = pelicula;
  })
  
  
  // this.peliculasService.getMovieDetails(id)
  //      .subscribe( movie => {
  //       if ( !movie) {
  //         this.router.navigateByUrl('/home');
  //         return;
  //       }
  //       console.log(movie);
  //  this.pelicula = movie;
  //      });

   this.peliculasService.getCast( id )
      .subscribe( (cast: any) => {
       this.cast = cast.filter( (actor: { profile_path: any; }) => actor.profile_path)
      });
  }

  onRegresar(){
    this.location.back()
  }

}
