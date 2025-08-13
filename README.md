# Weather Dashboard 🌤️

A modern, responsive weather dashboard that provides real-time weather information and 5-day forecasts for any city worldwide. Built with vanilla JavaScript, HTML, and CSS featuring a beautiful glassmorphism design.

## ✨ Features

- **Real-time Weather Data**: Get current weather conditions for any city
- **5-Day Forecast**: View upcoming weather predictions
- **Detailed Weather Stats**: Visibility, humidity, wind speed, and atmospheric pressure
- **Beautiful UI**: Modern glassmorphism design with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Search Functionality**: Easy city search with keyboard shortcuts
- **Weather Icons**: Dynamic icons that change based on weather conditions
- **Loading States**: Smooth loading animations for better UX

## 🚀 Live Demo

[View Live Demo](https://your-username.github.io/weather-dashboard) *(Replace with your actual GitHub Pages URL)*

## 📸 Screenshots



## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with glassmorphism effects
- **JavaScript (ES6+)**: Vanilla JavaScript for functionality
- **OpenWeatherMap API**: Weather data provider
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## 🏃‍♂️ Quick Start

### Prerequisites

- A modern web browser
- OpenWeatherMap API key (free)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayushkumar170704/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Get your API key**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   - Generate a free API key

3. **Configure the API key**
   - Open `script.js`
   - Replace `''` with your API key:
   ```javascript
   const API_KEY = 'your-api-key-here';
   ```

4. **Run the application**
   - Open `index.html` in your web browser
   - Or serve it using a local server:
   ```bash 
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

5. **Start exploring!**
   - Search for any city to get weather information
   - View current conditions and 5-day forecast

## 📁 Project Structure

```
weather-dashboard/
│
├── index.html          # Main HTML file
├── style.css           # Stylesheet with glassmorphism design
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── screenshot.png      # Screenshot for README (add this)
```

## 🔧 Configuration

### API Configuration

The app uses the OpenWeatherMap API. You can customize the following in `script.js`:

```javascript
const API_KEY = 'your-api-key-here';  // Your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';  // API base URL
```

### Default City

Change the default city that loads when the app starts:

```javascript
getWeatherData('London'); // Change 'London' to your preferred city
```

## 🎨 Customization

### Colors and Theme

The app uses CSS custom properties for easy theming. Modify the gradient background in `style.css`:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Weather Icons

Weather icons are mapped in `script.js`. You can customize the icon mapping:

```javascript
const weatherIcons = {
    '01d': 'fas fa-sun',
    '01n': 'fas fa-moon',
    // Add more mappings...
};
```

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints at:
- **Desktop**: > 768px
- **Tablet**: 768px - 480px  
- **Mobile**: < 480px

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for the weather API
- [Font Awesome](https://fontawesome.com/) for the icons
- [Google Fonts](https://fonts.google.com/) for the Inter font family
- Design inspiration from modern weather apps



⭐ Star this repository if you found it helpful!
