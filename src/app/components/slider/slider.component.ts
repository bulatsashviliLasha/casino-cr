import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', [animate('1s')]),
    ])
  ]
})
export class SliderComponent implements OnInit {
  items: string[] = [
    '../assets/image/image_1.png',
    '../assets/image/image_2.png',
    '../assets/image/image_3.png',
    '../assets/image/image_4.jpg',
    '../assets/image/image_5.jpg',
  ];
  currentSliderIndex: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentSliderIndex = ++this.currentSliderIndex % this.items.length;
    }, 5000)
  }

}
