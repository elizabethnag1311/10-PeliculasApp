import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/CarteleraResponse';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public texto = '';
  public movies: Movie[] = [];

  constructor( private activateRouter: ActivatedRoute,
               private peliculasService: PeliculasService ) { }

  ngOnInit() {
    this.activateRouter.params
        .subscribe( (params: any) => {
    this.texto = params.texto;
    this.peliculasService.buscarPeliculas( params.texto )
        .subscribe( movies => {
    this.movies = movies;
      })
    })
  }

}
