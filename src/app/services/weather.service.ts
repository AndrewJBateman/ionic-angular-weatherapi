import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const apiKey = "YOUR API KEY HERE";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getWeatherFromApi(city: string) {
    return this.httpClient.get(
      `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`
    );
  }
}
