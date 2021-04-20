# Ionic Angular WeatherApi

App to display weather data from the [Weatherstack weather API](https://weatherstack.com/documentation) using the [Ionic 5 framework](https://ionicframework.com/docs).

## Table of contents

* [Ionic Angular WeatherApi](#ionic-angular-weatherapi)
  * [Table of contents](#table-of-contents)
  * [General info](#general-info)
  * [Screenshots](#screenshots)
  * [Technologies](#technologies)
  * [Setup](#setup)
  * [Code Examples](#code-examples)
  * [Features](#features)
  * [Status & To-do list](#status--to-do-list)
  * [Inspiration](#inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## General info

* The [Weatherstack weather API](https://weatherstack.com/documentation) is a fully managed weather API platform that provides extensive APIs
  that supply the following data:

* Real-time weather
* Up to 14 day weather forecast
* Historical weather inforamtion
* Astronomy
* Time zone
* Geolocation data

## Screenshots

![Ionic page](./img/.png)

## Technologies

* [Ionic v5](https://ionicframework.com/)
* [Angular v11](https://angular.io/)
* [Ionic/angular v5](https://www.npmjs.com/package/@ionic/angular)
* [Ionic storage-angular v3](https://www.npmjs.com/package/@ionic/storage-angular)
* [Weatherstack weather API](https://weatherstack.com/documentation)

## Setup

* To start the server on _localhost://8100_ type: 'ionic serve'

## Code Examples

* Extract from `weather.service.ts` that gets data from the API.

```typescript
export class WeatherService {

  constructor(private httpClient: HttpClient) {}

  getWeatherFromApi(city: string) {
    return this.httpClient.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`);
  }
}
```

* Extract from `list.page.ts` function to get API weather data.

```typescript
getWeather() {
  this.ionicStorage.get('city').then( city => {
    if (city === null) {
      this.weatherService.getWeatherFromApi('madrid').subscribe( weather => {
        this.weather = weather;
        console.log(weather);
      });
    } else {
      this.weatherService.getWeatherFromApi(city).subscribe( weather => {
        this.weather = weather;
        console.log(weather);
      });
    }

  }).catch(err => {
    console.log(err);
  });
}
```

## Features

* Searches for weather data in any counry of the world.
* Ionic storage module used: based on LocalForage with support for SQLite, a file-based approach.
  There are issues with browser storage in local apps.

## Status & To-do list

* Status: Working.
* To-do: add functionality

## Inspiration

* [Aldo Caamal: Simple Weather App ( Ionic 4 / Angular 7 / Apixu API )](https://www.youtube.com/watch?v=P6RDIjF66dw&t=137s).

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
