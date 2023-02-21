import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/CarteleraResponse';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-peliculas-poster-grip',
  templateUrl: './peliculas-poster-grip.component.html',
  styleUrls: ['./peliculas-poster-grip.component.css']
})
export class PeliculasPosterGripComponent implements OnInit {
  
  @Input() movies!: Movie[];

  constructor( config: NgbRatingConfig ) {
    config.max = 10;
    config.readonly = true;
  }

  ngOnInit() {
    console.log( this.movies);
  }

}
