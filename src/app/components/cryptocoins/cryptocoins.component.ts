import { Component, OnInit } from "@angular/core";
import { Coin } from "../../models/coin";
import { CryptocoinService } from "../../services/cryptocoin.service";

@Component({
  selector: "app-cryptocoins",
  templateUrl: "./cryptocoins.component.html",
  styleUrls: ["./cryptocoins.component.css"]
})
export class CryptocoinsComponent implements OnInit {
  coins: Coin[];
  constructor(private cryptoService: CryptocoinService) {}

  ngOnInit() {
    this.cryptoService.getCoins().subscribe(coins => {
      console.log(coins + "..coins ello!");
      console.log(
        Object.values(coins["data"]) + "..object values on coins convert!"
      );
      console.log(Object.values(coins).shift() + "..ello shift !");
      console.log(coins.toString() + "tostring...");
      this.coins = Object.values(coins["data"]); //Object.values(coins).shift();
    });
  }
}
