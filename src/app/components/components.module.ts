import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGripComponent } from './peliculas-poster-grip/peliculas-poster-grip.component';

import { PipesModule } from "../pipes/pipes.module";
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGripComponent,
    CastSlideshowComponent
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGripComponent,
    CastSlideshowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    PipesModule
  ]
})
export class ComponentsModule { }
