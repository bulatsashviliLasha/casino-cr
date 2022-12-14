import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showScroll: boolean = false;
  topPosToStartShowing: number = 250;

  @HostListener('window:scroll')

  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.showScroll = true;
    } else {
      this.showScroll = false;
    }
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0
    });
  }

}
