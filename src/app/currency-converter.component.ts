import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent {
  baseCurrency: string = 'UAH';
  targetCurrency: string = 'USD';
  amount: number = 0;
  convertedAmount: number = 0;
  exchangeRates: { [key: string]: number } = {};

  constructor(private http: HttpClient) {
    this.getExchangeRates();
  }

  getExchangeRates() {
    this.http.get<any>('https://api.exchangerate.host/latest?base=' + this.baseCurrency).subscribe(data => {
      this.exchangeRates = data.rates;
      this.convertCurrencies();
    });
  }

  convertCurrencies() {
    const baseRate = this.exchangeRates[this.baseCurrency];
    const targetRate = this.exchangeRates[this.targetCurrency];

    this.convertedAmount = (this.amount / baseRate) * targetRate;
  }

  convertBackCurrencies() {
    const baseRate = this.exchangeRates[this.baseCurrency];
    const targetRate = this.exchangeRates[this.targetCurrency];

    this.amount = (this.convertedAmount / targetRate) * baseRate;
  }
}