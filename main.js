"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WeatherStation_1 = require("./src/behavioral/WeatherStation");
const WeatherDisplayFactory_1 = require("./src/creational/WeatherDisplayFactory");
const WeatherAdapter_1 = require("./src/structural/WeatherAdapter");
const OldWeatherSystem_1 = require("./src/structural/OldWeatherSystem");
// Simulate the execution
const weatherStation = new WeatherStation_1.WeatherStation(); // This will be our weather data source
// Create displays dynamically using Factory (Creational)
const sunnyDisplay = WeatherDisplayFactory_1.WeatherDisplayFactory.createDisplay('Sunny');
const rainyDisplay = WeatherDisplayFactory_1.WeatherDisplayFactory.createDisplay('Rainy');
// Add these displays to the weather station as observers (Behavioral)
weatherStation.addObserver(sunnyDisplay);
weatherStation.addObserver(rainyDisplay);
// Adapter for the old weather system (Structural)
const oldWeatherSystem = new OldWeatherSystem_1.OldWeatherSystem();
const weatherAdapter = new WeatherAdapter_1.WeatherAdapter(oldWeatherSystem);
weatherStation.addObserver(weatherAdapter); // Add the adapter as an observer
// Fetch new weather data and notify all displays (including adapter)
weatherStation.fetchWeatherData();
