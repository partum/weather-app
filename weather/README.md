**Topics for next project: forms, Fetch API, React**

### **Project: Weather Dashboard**

### **Overview**:

Build a simple weather application where users can input a city name through an HTML form, and the app fetches and displays current weather information using a free weather API.

### **Key Features**:

1. **City Search Form**:
    - A text input field where users can type the name of a city.
    - A submit button to trigger the API call.
2. **Weather Display**:
    - Display current temperature, weather condition (e.g., sunny, cloudy), and other details like humidity and wind speed.
3. **Dynamic Background**:
    - Change the background color or image dynamically based on the weather condition (e.g., blue for clear skies, gray for cloudy).
4. **Error Handling**:
    - Show a user-friendly error message if the city is not found or if there’s an issue with the API.
5. **Responsive Design**:
    - Ensure the app looks good on both desktop and mobile devices.

### **Technologies**:

- **HTML Forms**: For user input.
- **React**: To build and manage the user interface.
- **Free API**: Use the [OpenWeatherMap API](https://openweathermap.org/api) for weather data.

### **Steps to Build**:

1. **Set Up the React App**:
    - Use `create-react-app` or `Vite` to scaffold the project.
2. **Create the HTML Form**:
    - Create a form component with a text input field and a submit button.
3. **Fetch Weather Data**:
    - Use the OpenWeatherMap API to fetch weather data based on the user’s input.
    - Store the API key securely in an `.env` file.
4. **Display Weather Info**:
    - Create a component to display weather details dynamically.
5. **Add Error Handling**:
    - Show error messages when there’s an issue with the input or API.
6. **Style the App**:
    - Use CSS or libraries like Tailwind CSS for styling.
7. **Bonus Features**:
    - Add a toggle for metric/imperial units.
    - Use the browser's geolocation API to fetch weather data for the user's current location.

### **Free API Example**:

- **OpenWeatherMap API**:
    - **Endpoint**: `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`
    - Free tier allows for a good number of API calls per day.
