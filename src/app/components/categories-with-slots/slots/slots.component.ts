import {Component, Input} from '@angular/core';
import {Game} from "../../../models/provider";

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss']
})
export class SlotsComponent {
  @Input() items: Game[] = [];
}
