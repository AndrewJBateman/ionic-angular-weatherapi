import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../services/weather.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
// ionic storage
import { Storage } from "@ionic/storage-angular";

@Component({
	selector: "app-list",
	templateUrl: "list.page.html",
	styleUrls: ["list.page.scss"],
})
export class ListPage implements OnInit {
	constructor(
		private weatherService: WeatherService,
		private storage: Storage
	) {}

	public weatherForm = new FormGroup({
		city: new FormControl("", Validators.required),
	});
	public weather: Object;
	public city: string;

	search(formData: FormData) {
		console.log(formData);
		this.storage.set("city", formData["city"]);

		this.weatherService
			.getWeatherFromApi(formData["city"])
			.subscribe((weather) => {
				this.weather = weather;
				console.log(weather);
			});
	}

	getWeather() {
		this.storage
			.get("city")
			.then((city) => {
				if (city === null) {
					this.weatherService
						.getWeatherFromApi("madrid")
						.subscribe((weather) => {
							this.weather = weather;
							console.log(weather);
						});
				} else {
					this.weatherService.getWeatherFromApi(city).subscribe((weather) => {
						this.weather = weather;
						console.log(weather);
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	async ngOnInit() {
    await this.storage.create();
		this.getWeather();
	}
}
