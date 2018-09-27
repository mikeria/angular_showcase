import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Coin } from "../models/coin";

@Injectable()
export class CryptocoinService {
  cmcAllUrl: string = "https://api.coinmarketcap.com/v2/ticker/?limit=10";
  constructor(private http: HttpClient) {}
  getCoins(): Observable<Coin[]> {
    return this.http.get<Coin[]>(this.cmcAllUrl);
  }
}
