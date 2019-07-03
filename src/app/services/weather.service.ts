import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const apiKey = '';

@Injectable({
	providedIn: 'root'
})
export class WeatherService {

	constructor(private httpClient: HttpClient) {}

	getWeatherFromApi(city: string) {
		return this.httpClient.get(`https://api.apixu.com/v1/current.json?key=${apiKey}&q=${city}`);
	}
}
