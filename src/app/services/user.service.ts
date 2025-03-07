import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { User } from '../models/user';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private base_url= "https://649088911e6aa71680cb6c15.mockapi.io/users";
  private url_code_country= "https://api.worldbank.org/v2/country/";

  constructor( private http: HttpClient ) {}

  getUserList(){

    return this.http.get<User[]>(this.base_url).pipe(

      map(users => users.slice(0, 25)),
      switchMap(users => {
        const usersWithCountries$ = users.map(user => 
          this.getCountryName(user.country).pipe(
            map(countryName => ({ ...user, country: countryName }))
          )
        );
        return forkJoin(usersWithCountries$);
      })
    );
  }

    private getCountryName(code: string): Observable<string> {
      return this.http.get<any>(`${this.url_code_country}${code}?format=json`).pipe(
        map(countryData => countryData[0]?.name?.common || code)
      );
    }
}
