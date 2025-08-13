// Weather API configuration
const API_KEY = '32e1605670b9e396f9479a1299abe0a6'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// DOM elements
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const loading = document.getElementById('loading');
const currentCity = document.getElementById('currentCity');
const currentDate = document.getElementById('currentDate');
const currentTemp = document.getElementById('currentTemp');
const currentIcon = document.getElementById('currentIcon');
const weatherDescription = document.getElementById('weatherDescription');
const feelsLike = document.getElementById('feelsLike');
const visibility = document.getElementById('visibility');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const pressure = document.getElementById('pressure');
const forecastContainer = document.getElementById('forecastContainer');

// Weather icon mapping
const weatherIcons = {
    '01d': 'fas fa-sun',
    '01n': 'fas fa-moon',
    '02d': 'fas fa-cloud-sun',
    '02n': 'fas fa-cloud-moon',
    '03d': 'fas fa-cloud',
    '03n': 'fas fa-cloud',
    '04d': 'fas fa-cloud',
    '04n': 'fas fa-cloud',
    '09d': 'fas fa-cloud-rain',
    '09n': 'fas fa-cloud-rain',
    '10d': 'fas fa-cloud-sun-rain',
    '10n': 'fas fa-cloud-moon-rain',
    '11d': 'fas fa-bolt',
    '11n': 'fas fa-bolt',
    '13d': 'fas fa-snowflake',
    '13n': 'fas fa-snowflake',
    '50d': 'fas fa-smog',
    '50n': 'fas fa-smog'
};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    updateCurrentDate();
    getWeatherData('London'); // Default city
    
    // Event listeners
    searchBtn.addEventListener('click', handleSearch);
    cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
});

// Update current date
function updateCurrentDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    currentDate.textContent = now.toLocaleDateString('en-US', options);
}

// Handle search functionality
function handleSearch() {
    const city = cityInput.value.trim();
    if (city) {
        getWeatherData(city);
        cityInput.value = '';
    }
}

// Show/hide loading spinner
function showLoading() {
    loading.style.display = 'flex';
}

function hideLoading() {
    loading.style.display = 'none';
}

// Get weather data from API
async function getWeatherData(city) {
    showLoading();
    
    try {
        // Get current weather
        const currentWeatherUrl = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const currentResponse = await fetch(currentWeatherUrl);
        
        if (!currentResponse.ok) {
            throw new Error('City not found');
        }
        
        const currentData = await currentResponse.json();
        
        // Get 5-day forecast
        const forecastUrl = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`;
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();
        
        // Update UI with weather data
        updateCurrentWeather(currentData);
        updateForecast(forecastData);
        
    } catch (error) {
        alert('Error fetching weather data: ' + error.message);
        console.error('Weather API Error:', error);
    } finally {
        hideLoading();
    }
}

// Update current weather display
function updateCurrentWeather(data) {
    currentCity.textContent = `${data.name}, ${data.sys.country}`;
    currentTemp.textContent = `${Math.round(data.main.temp)}°`;
    weatherDescription.textContent = data.weather[0].description
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    feelsLike.textContent = `${Math.round(data.main.feels_like)}°`;
    
    // Update weather icon
    const iconCode = data.weather[0].icon;
    currentIcon.className = weatherIcons[iconCode] || 'fas fa-sun';
    
    // Update stats
    visibility.textContent = `${(data.visibility / 1000).toFixed(1)} km`;
    humidity.textContent = `${data.main.humidity}%`;
    windSpeed.textContent = `${Math.round(data.wind.speed * 3.6)} km/h`;
    pressure.textContent = `${data.main.pressure} hPa`;
}

// Update 5-day forecast
function updateForecast(data) {
    forecastContainer.innerHTML = '';
    
    // Group forecast data by day (take one forecast per day at noon)
    const dailyForecasts = data.list.filter((item, index) => index % 8 === 0).slice(0, 5);
    
    dailyForecasts.forEach(forecast => {
        const forecastItem = createForecastItem(forecast);
        forecastContainer.appendChild(forecastItem);
    });
}

// Create forecast item element
function createForecastItem(forecast) {
    const item = document.createElement('div');
    item.className = 'forecast-item';
    
    const date = new Date(forecast.dt * 1000);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
    const iconCode = forecast.weather[0].icon;
    const iconClass = weatherIcons[iconCode] || 'fas fa-sun';
    
    item.innerHTML = `
        <div class="forecast-day">${dayName}</div>
        <div class="forecast-icon">
            <i class="${iconClass}"></i>
        </div>
        <div class="forecast-temps">
            <span class="forecast-high">${Math.round(forecast.main.temp_max)}°</span>
            <span class="forecast-low">${Math.round(forecast.main.temp_min)}°</span>
        </div>
    `;
    
    return item;
}

// Demo mode - if no API key is provided
if (API_KEY === 'YOUR_API_KEY_HERE') {
    console.warn('Please add your OpenWeatherMap API key to enable live weather data');
    // You can add demo data here for testing
    updateDemoData();
}

function updateDemoData() {
    // Demo data for testing without API key
    const demoCurrentWeather = {
        name: 'London',
        sys: { country: 'GB' },
        main: { 
            temp: 22, 
            feels_like: 25, 
            humidity: 65, 
            pressure: 1013 
        },
        weather: [{ 
            description: 'partly cloudy', 
            icon: '02d' 
        }],
        visibility: 10000,
        wind: { speed: 3.33 }
    };
    
    updateCurrentWeather(demoCurrentWeather);
    
    // Demo forecast data
    const demoForecast = {
        list: [
            { dt: Date.now()/1000, weather: [{ icon: '01d' }], main: { temp_max: 24, temp_min: 18 } },
            { dt: Date.now()/1000 + 86400, weather: [{ icon: '02d' }], main: { temp_max: 26, temp_min: 20 } },
            { dt: Date.now()/1000 + 172800, weather: [{ icon: '10d' }], main: { temp_max: 19, temp_min: 15 } },
            { dt: Date.now()/1000 + 259200, weather: [{ icon: '04d' }], main: { temp_max: 21, temp_min: 16 } },
            { dt: Date.now()/1000 + 345600, weather: [{ icon: '01d' }], main: { temp_max: 25, temp_min: 19 } }
        ]
    };
    
    updateForecast(demoForecast);
}
