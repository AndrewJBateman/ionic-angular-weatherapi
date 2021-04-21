import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const apiKey = "45be76ae867d6487064c93552078b67f";

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
