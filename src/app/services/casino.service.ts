import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {of, switchMap} from "rxjs";
import {Slots} from "../models/slots";
import {Provider} from "../models/provider";

@Injectable({
  providedIn: 'root'
})
export class CasinoService {
  baseUrl: string = 'https://cms.crocobet.com/integrations';

  constructor(private http: HttpClient) {
  }

  getProvider(provider: string) {
    return this.http.get<Provider>(`${this.baseUrl}/v2/slot/providers/${provider}?platform=desktop`).pipe(
      switchMap(res => {
        return of(res.data)
      })
    )
  }

  getSlots() {
    return this.http.get<Slots>(`${this.baseUrl}?type=slot&platform=desktop`).pipe(
      switchMap(res => {
        return of(res.data)
      })
    )
  }

}

