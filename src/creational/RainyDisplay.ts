import { WeatherDisplay } from './WeatherDisplay';
import { WeatherData } from '../../WeatherData';

export class RainyDisplay implements WeatherDisplay {
    update(data: WeatherData) {
        console.log(`Rainy Display: It's ${data.temperature}°C and rainy!`);
    }
}
