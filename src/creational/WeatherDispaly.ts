import { WeatherData } from '../../WeatherData';  // Correct import for WeatherData

// Interface for weather display types
export interface WeatherDisplay {
    update(data: WeatherData): void;  // Correct usage of WeatherData type
}
