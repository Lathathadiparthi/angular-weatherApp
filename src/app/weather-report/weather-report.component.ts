import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {
  weatherData:any

  constructor() { }

  ngOnInit(): void {
    this.getWeatherdata();
    console.log(this.weatherData);
  }
  getWeatherdata() {
    let data:any=JSON.parse('{"coord":{"lon":78.4744,"lat":17.3753},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50n"},{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"base":"stations","main":{"temp":296.88,"feels_like":297.76,"temp_min":296.88,"temp_max":296.88,"pressure":1007,"humidity":94},"visibility":5000,"wind":{"speed":4.12,"deg":240,"gust":9.26},"rain":{"1h":0.21},"clouds":{"all":100},"dt":1663017254,"sys":{"type":1,"id":9213,"country":"IN","sunrise":1663029237,"sunset":1663073442},"timezone":19800,"id":1269843,"name":"Hyderabad","cod":200}')
    this.setWeatherData(data);

  }

  setWeatherData(data:any) {
    this.weatherData=data
   /*   let sunsetTime=new Date(this.weatherData.sys.sunset * 1000)
    this.weatherData.sunsetTime=sunsetTime.toLocaleTimeString()
    let currentdate=new Date()
    this.weatherData.isDay=(currentdate.getTime() < sunsetTime.getTime())
    this.weatherData.temp_celcius=(this.weatherData.main.temp - 273.15).toFixed(0)
    this.weatherData.temp_min=(this.weatherData.main.temp_min - 273.15).toFixed(0)
    this.weatherData.temp_max=(this.weatherData.main.temp_max - 273.15).toFixed(0)
    this.weatherData.temp_feels_like =(this.weatherData.main.feels_like - 273.15).toFixed(0)  */
   
  }
}
