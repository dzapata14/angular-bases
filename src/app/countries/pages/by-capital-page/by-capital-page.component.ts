import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { CountryPageComponent } from './../country-page/country-page.component';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent implements OnInit, OnDestroy {
  public countries: Country[] = [];
  public isLoading: Boolean = false;
  public initialValue: string = '';


  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  ngOnDestroy(): void {
/*    localStorage.setItem('countries', JSON.stringify(this.countries));
    localStorage.setItem('term', this.term);*/
  }

  constructor(private countriesService: CountriesService) {

  }

  searchByCapital = (term:string):void => {
    this.isLoading = true;
    this.countriesService.searchCapital(term)
    .subscribe(
      countries => {
        this.countries = countries;
        this.isLoading = false;
      }
    );
  }
}
