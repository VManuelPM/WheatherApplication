import { Component, OnInit } from '@angular/core';
import { Weather } from './models/weather';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public weatherData?: Weather
  public paramCity: string = ''

  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
  }

  onSubmit(){
    this.getWeatherData(this.paramCity)
  }

  private getWeatherData(cityName: string):void{
    this.weatherService.getWheaterData(cityName).subscribe({
      next: (response) => {
        console.log(response)
        this.weatherData = response
      }
    })
  }
}
