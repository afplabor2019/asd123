import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  static slideIndex : number;

  constructor() { SlideshowComponent.slideIndex = 1;}

  ngOnInit() {
    console.log(SlideshowComponent.slideIndex);
    SlideshowComponent.loadSlide(SlideshowComponent.slideIndex);
    setInterval(this.showSlides,10000);
  }

  static loadSlide(index){
    var slides,dots;   
    slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    dots = document.getElementsByClassName("dot"); 

    if (index > slides.length) {index = 1}
    else if (index < 1){
      index = slides.length
    }

    for (var i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
    }

    for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[index-1].style.display = "block";
    dots[index-1].className += " active";
    this.slideIndex = index;
  }

  showSlides()
  {
    SlideshowComponent.slideIndex++;
    SlideshowComponent.loadSlide(SlideshowComponent.slideIndex);
  }
 
  plusSlides(position) {
    SlideshowComponent.loadSlide(SlideshowComponent.slideIndex + position);
  }

  goToSlide(slideIndex) {
    SlideshowComponent.loadSlide(slideIndex);
  }
}
