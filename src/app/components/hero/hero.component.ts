import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit() {
    const video: HTMLVideoElement | null = document.querySelector('.hero-video');
    if (video) {
      video.muted = true; // ensure muted for autoplay
      video.play().catch((e) => {
        console.log("Autoplay blocked, fallback triggered:", e);
      });
    }
  }
}
