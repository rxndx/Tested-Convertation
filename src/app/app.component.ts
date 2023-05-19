import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  baseCurrency = 'UAH';
  exchangeRates: { [key: string]: number } = {};
  dollarRate: number;
  euroRate: number;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getExchangeRates();
  }

  getExchangeRates() {
    this.http.get<any>('https://api.exchangerate.host/latest?base=UAH&symbols=USD,EUR').subscribe(data => {
      this.exchangeRates = data.rates;
      this.dollarRate = 1 / this.exchangeRates['USD'];
      this.euroRate = 1 / this.exchangeRates['EUR'];
    });
  }
}
