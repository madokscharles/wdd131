document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    document.getElementById('currentYear').textContent = currentYear;
    document.getElementById('lastModified').textContent = lastModified;

    const temperature = 25; // Celsius
    const windSpeed = 15; // km/h
    const windChillValue = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').textContent = windChillValue;
});

function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) + " °C";
    }
    return "N/A";
}
