
import { WeatherDisplay } from './WeatherDisplay'; 
import { WeatherData } from '../../WeatherData';   

export class SunnyDisplay implements WeatherDisplay {
    update(data: WeatherData) {
        console.log(`Sunny Display: It's ${data.temperature}°C and sunny!`);
    }
}
