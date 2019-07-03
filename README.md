# Ionic Angular WeatherApi

App to display weather data from a [weather API](https://www.apixu.com/api.aspx) using the [Ionic 5 framework](https://ionicframework.com/docs).

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* The [weather API](https://www.apixu.com/api.aspx) is a fully managed weather API platform that provides extensive APIs that range from weather and astronomy through to time zone and geolocation.

## Screenshots

![Ionic page](./img/.png)

## Technologies

* [Ionic v5.0.0](https://ionicframework.com/)

* [Ionic/angular v4.1.0](https://www.npmjs.com/package/@ionic/angular)

* [Ionic storage v2.2.0](https://www.npmjs.com/package/@ionic/storage)

* [Weather API](https://www.apixu.com/api.aspx)

## Setup

* To start the server on _localhost://8100_ type: 'ionic serve'

## Code Examples

* Extract from `service.ts` that gets data from the API.

```typescript
export class NewsService {
  currentArticle: any;

  constructor(private http: HttpClient) {}

  getData(url) {
    return this.http.get(`${apiUrl}/${url}&apiKey=${apiKey}`);
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

## Status & To-do list

* Status: Working.

* To-do: add functionality

## Inspiration

Project inspired by:
[Aldo Caamal: Simple Weather App ( Ionic 4 / Angular 7 / Apixu API )](https://www.youtube.com/watch?v=P6RDIjF66dw&t=137s).

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
