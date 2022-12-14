import { Component } from '@angular/core';

@Component({
  selector: 'app-static-categories',
  templateUrl: './static-categories.component.html',
  styleUrls: ['./static-categories.component.scss']
})
export class StaticCategoriesComponent {
  staticCategoriesData: {
  name: string;
  svg: string;
  number: number
}[] = [
    {
      name: 'Top Slots',
      svg: '../../../../assets/svg/static-categories/best-seller.svg',
      number: 25
    },
    {
      name: 'Favorites',
      svg: '../../../../assets/svg/static-categories/star.svg',
      number: 125
    },
    {
      name: 'New Games',
      svg: '../../../../assets/svg/static-categories/new.svg',
      number: 125
    },
    {
      name: 'Buy Bonus',
      svg: '../../../../assets/svg/static-categories/gift.svg',
      number: 125
    },
    {
      name: 'History',
      svg: '../../../../assets/svg/static-categories/history.svg',
      number: 125
    },
  ];
}
