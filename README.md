# Ionic Angular WeatherApi

* App to display weather data from the [Weatherstack weather API](https://weatherstack.com/documentation) using the [Ionic framework](https://ionicframework.com/docs).
* Some changes were made to the code so it would work in the latest Angular version.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/ionic-angular-weatherapi?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/ionic-angular-weatherapi?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/ionic-angular-weatherapi?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/ionic-angular-weatherapi?style=plastic)

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

![Ionic page](./img/weather.png)

## Technologies

* [Ionic v6](https://ionicframework.com/)
* [Angular v13](https://angular.io/)
* [Ionic/angular v6](https://www.npmjs.com/package/@ionic/angular)
* [Ionic storage-angular v3](https://www.npmjs.com/package/@ionic/storage-angular)
* [Weatherstack weather API](https://weatherstack.com/documentation)

## Setup

* `npm i` to install dependencies
* Get yourself an API key from [weatherstack.com](https://weatherstack.com/) and add to `weather.service.ts` line 4
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

* Searches for weather data in any city of the world
* Ionic storage module used

## Status & To-do list

* Status: Working.
* To-do: Add to menu options - list of cities searched for etc. Convert to use Angular async pipe

## Inspiration

* [Aldo Caamal: Simple Weather App ( Ionic 4 / Angular 7 / Apixu API )](https://www.youtube.com/watch?v=P6RDIjF66dw&t=137s).

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
