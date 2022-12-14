import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navData: {
    link: string;
    img: string;
  }[] = [
    {
      link: '/sport',
      img: '../../../assets/svg/navigation/sport.svg'
    },
    {
      link: '/live',
      img: '../../../assets/svg/navigation/live.svg'
    },
    {
      link: '/slots',
      img: '../../../assets/svg/navigation/slots.svg'
    },
    {
      link: '/casino',
      img: '../../../assets/svg/navigation/casino.svg'
    },
  ]

}
