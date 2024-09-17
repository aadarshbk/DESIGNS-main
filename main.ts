import { WeatherStation } from './src/behavioral/WeatherStation';
import { WeatherDisplayFactory } from './src/creational/WeatherDisplayFactory';
import { WeatherAdapter } from './src/structural/WeatherAdapter';
import { OldWeatherSystem } from './src/structural/OldWeatherSystem';
import { WeatherData } from './WeatherData';

// Simulate the execution
const weatherStation = new WeatherStation();  // This will be our weather data source

// Create displays dynamically using Factory (Creational)
const sunnyDisplay = WeatherDisplayFactory.createDisplay('Sunny');
const rainyDisplay = WeatherDisplayFactory.createDisplay('Rainy');

// Add these displays to the weather station as observers (Behavioral)
weatherStation.addObserver(sunnyDisplay);
weatherStation.addObserver(rainyDisplay);

// Adapter for the old weather system (Structural)
const oldWeatherSystem = new OldWeatherSystem();
const weatherAdapter = new WeatherAdapter(oldWeatherSystem);
weatherStation.addObserver(weatherAdapter);  // Add the adapter as an observer

// Fetch new weather data and notify all displays (including adapter)
weatherStation.fetchWeatherData();
