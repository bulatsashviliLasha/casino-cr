import {Component, OnInit} from '@angular/core';
import {Slot} from "../../models/slots";
import {CasinoService} from "../../services/casino.service";
import {first} from "rxjs";
import {ProviderData} from "../../models/provider";

@Component({
  selector: 'app-categories-with-slots',
  templateUrl: './categories-with-slots.component.html',
  styleUrls: ['./categories-with-slots.component.scss']
})

export class CategoriesWithSlotsComponent implements OnInit {
  slots: Slot[] = [];
  state: boolean = true;
  provider: ProviderData | null = null;

  constructor(private casinoService: CasinoService) {
  }

  ngOnInit(): void {
    this.casinoService.getSlots().pipe(first()).subscribe((slotsData) => {
      this.slots = slotsData;
    })
    this.getGame();
  }

  getGame(provider: string = 'egt') {
    this.casinoService.getProvider(provider).pipe(first()).subscribe((providerData) => {
      this.provider = providerData;
    })
  }

}
