import { WeatherDisplay } from './WeatherDisplay';
import { SunnyDisplay } from './SunnyDisplay';
import { RainyDisplay } from './RainyDisplay';

export class WeatherDisplayFactory {
    static createDisplay(condition: string): WeatherDisplay {
        switch (condition) {
            case 'Sunny':
                return new SunnyDisplay();
            case 'Rainy':
                return new RainyDisplay();
            default:
                throw new Error('Unknown weather condition');
        }
    }
}
