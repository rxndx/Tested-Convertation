import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyConverterComponent } from './currency-converter.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule ],
    declarations: [ AppComponent, CurrencyConverterComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }