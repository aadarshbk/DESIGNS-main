import { WeatherDisplay } from '../creational/WeatherDisplay';
import { WeatherData } from '../../WeatherData';
import { OldWeatherSystem } from './OldWeatherSystem';

export class WeatherAdapter implements WeatherDisplay {
    private oldSystem: OldWeatherSystem;

    constructor(oldSystem: OldWeatherSystem) {
        this.oldSystem = oldSystem;
    }

    update(data: WeatherData) {
        const oldData = this.oldSystem.getOldWeatherData();
        const convertedData: WeatherData = {
            temperature: (oldData.tempInFahrenheit - 32) * (5 / 9),
            condition: oldData.weatherType === 'Clear' ? 'Sunny' : 'Rainy'
        };
        console.log(`Adapter Display: Converted Old Weather Data -> Temp: ${convertedData.temperature.toFixed(2)}°C, Condition: ${convertedData.condition}`);
    }
}
