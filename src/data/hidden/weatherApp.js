import weather_app_image from '../../images/weather_app.png';

const weatherApp = {
  id: 2,
  slug: 'weatherApp',
  title: 'Weather App',
  shortDescription:
    'Simple weather app created with React. It shows th current weather from a city from an autocomplete text field.',
  heroImage: null,
  gallery: [],
  tech: ['JavaScript', 'React', 'HTML'],
  content: [
    {
      type: 'text',
      value:
        'One of the projects I undertook to better understand and learn React was the creation of a simple weather application. The application was designed to display the current weather and temperature of a given city. The user would enter the name of the city into a text field, and the app would provide them with the current weather conditions in that location.',
    },
    {
      type: 'text',
      value:
        'To create this application, I utilized a couple of external APIs. The first was GeoDB Cities, which I used to retrieve the latitude and longitude of the city entered by the user. This was an essential first step because the second API I used, Open Weather, required these coordinates to fetch the correct weather information.',
    },
    {
      type: 'text',
      value:
        "The process of building this application involved a number of steps. After setting up a new React project, I designed a simple user interface with a text field for the user to enter the city name. Once the user submitted the form, the application would make a request to the GeoDB Cities API, parse the response to get the city's coordinates, and then make a request to the Open Weather API with these coordinates. The weather data returned from this API was then displayed to the user.",
    },
    {
      type: 'image',
      value: weather_app_image,
    },
    {
      type: 'text',
      value:
        'This project was an excellent opportunity for me to gain practical experience working with React and external APIs. I learned how to handle user input, manage state, and make API requests within a React application. I also got to see how data can flow within a React app, from user input to state changes to rendering new data on the screen.',
    },
    {
      type: 'text',
      value:
        "While the weather app was quite simple, it was a very useful learning tool. I was able to get a hands-on understanding of how to structure a React application, how to work with external APIs, and how to handle asynchronous operations with promises. These are all important skills for developing larger, more complex applications with React. And while there's always more to learn, this project was a significant step in my journey to becoming proficient with React.",
    },
  ],
  github: 'https://github.com/Sebabba/WeatherApp',
  demo: null,
  website: null,
};

export default weatherApp;
