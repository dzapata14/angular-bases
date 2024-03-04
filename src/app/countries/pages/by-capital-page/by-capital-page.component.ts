import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { CountryPageComponent } from './../country-page/country-page.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent {
public countries: Country[] = [];

constructor(private countriesService: CountriesService) {

}

  searchByCapital = (term:string):void => {
    this.countriesService.searchCapital(term)
    .subscribe(
      countries => this.countries = countries
    );
  }
}
