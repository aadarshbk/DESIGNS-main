import { WeatherData } from '../../WeatherData';

// Interface for observer pattern
export interface Observer {
    update(data: WeatherData): void;
}
