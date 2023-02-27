import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGripComponent } from './peliculas-poster-grip/peliculas-poster-grip.component';

import { PipesModule } from "../pipes/pipes.module";



@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGripComponent
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGripComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    PipesModule
  ]
})
export class ComponentsModule { }
