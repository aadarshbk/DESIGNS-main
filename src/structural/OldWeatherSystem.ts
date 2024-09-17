// Simulate the old weather system providing data in a different format
export class OldWeatherSystem {
    getOldWeatherData(): { tempInFahrenheit: number; weatherType: string } {
        return {
            tempInFahrenheit: Math.random() * 50 + 50,  // Temperature in Fahrenheit
            weatherType: Math.random() > 0.5 ? 'Clear' : 'Wet'  // Old naming conventions
        };
    }
}
