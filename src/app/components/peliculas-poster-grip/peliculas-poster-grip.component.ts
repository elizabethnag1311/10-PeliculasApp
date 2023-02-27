import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/CarteleraResponse';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-peliculas-poster-grip',
  templateUrl: './peliculas-poster-grip.component.html',
  styleUrls: ['./peliculas-poster-grip.component.css']
})
export class PeliculasPosterGripComponent implements OnInit {
  
  @Input() movies!: Movie[];

  constructor( private router: Router,
               config: NgbRatingConfig ) {
    config.max = 10;
    config.readonly = true;
  }

  ngOnInit() {
    console.log( this.movies);
  }

  onMovieClick( movie: Movie ){
    console.log(movie)
    this.router.navigate(['/pelicula', movie.id ])
  }
}
