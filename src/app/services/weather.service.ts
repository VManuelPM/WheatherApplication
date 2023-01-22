import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly URL = environment.weatherApiBaseUrl

  constructor(private http: HttpClient) { }

  getWheaterData(cityName: string): Observable<Weather>{
    return this.http.get<Weather>(`${this.URL}`, {
      headers: new HttpHeaders().set(environment.XRapidApiHostHeaderName, environment.RapidApiHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyValue),
      params: new HttpParams()
      .set('city',cityName)
    })
  }
}
