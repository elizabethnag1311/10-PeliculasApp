import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/CarteleraResponse';
import Swiper from 'swiper';



@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies!: Movie[];
  public swiper!: Swiper;

  constructor() { }

  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper', {
   loop: true

  });
}

  ngOnInit(): void {
    // console.log(this.movies)
  }

  onSlideNext(){ 
    this.swiper.slideNext()
  }

  onSlidePrev(){ 
    this.swiper.slidePrev()
  }


}
