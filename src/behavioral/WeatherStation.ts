import { Observer } from './Observer';
import { WeatherData } from '../../WeatherData';

export class WeatherStation {
    private observers: Observer[] = [];

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(data: WeatherData) {
        this.observers.forEach(observer => observer.update(data));
    }

    // Simulate fetching new weather data
    fetchWeatherData() {
        const data: WeatherData = {
            temperature: Math.random() * 30 + 10, // Random temperature between 10 and 40
            condition: Math.random() > 0.5 ? 'Sunny' : 'Rainy'  // Random condition
        };
        console.log("Weather fetched:", data);
        this.notifyObservers(data);
    }
}
