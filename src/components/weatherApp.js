import { Row } from "react-bootstrap";
import weather_app_image from "../images/weather_app.png";

const WeatherApp = () => {
    return(
        <Row className="justify-content-center">
            <div className="d-flex flex-column col-lg-8">
                <div>
                    <h1>Weather App</h1>
                    <p className="project-link">
                        <a href="https://github.com/Sebabba/WeatherApp"><i className="fa-brands fa-github"></i> Go to GitHub</a>
                    </p>
                </div>
                <div>
                    <p>
                        One of the projects I undertook to better understand and learn React was the creation of a simple weather
                        application. The application was designed to display the current weather and temperature of a given city.
                        The user would enter the name of the city into a text field, and the app would provide them with the current
                        weather conditions in that location.
                    </p>
                    <p>
                        To create this application, I utilized a couple of external APIs. The first was GeoDB Cities, which I used
                        to retrieve the latitude and longitude of the city entered by the user. This was an essential first step
                        because the second API I used, Open Weather, required these coordinates to fetch the correct weather
                        information.
                    </p>
                    <p>
                        The process of building this application involved a number of steps. After setting up a new React project,
                        I designed a simple user interface with a text field for the user to enter the city name. Once the user
                        submitted the form, the application would make a request to the GeoDB Cities API, parse the response to get
                        the city's coordinates, and then make a request to the Open Weather API with these coordinates. The weather
                        data returned from this API was then displayed to the user.
                    </p>
                    <div className="project-image">
                        <img src={weather_app_image} className="w-100" alt="Weather app"/>
                    </div>
                    <p>
                        This project was an excellent opportunity for me to gain practical experience working with React and external
                        APIs. I learned how to handle user input, manage state, and make API requests within a React application. I
                        also got to see how data can flow within a React app, from user input to state changes to rendering new data
                        on the screen.
                    </p>
                    <p>
                        While the weather app was quite simple, it was a very useful learning tool. I was able to get a hands-on
                        understanding of how to structure a React application, how to work with external APIs, and how to handle
                        asynchronous operations with promises. These are all important skills for developing larger, more complex
                        applications with React. And while there's always more to learn, this project was a significant step in my
                        journey to becoming proficient with React.
                    </p>
                </div>
            </div>
        </Row>
    )
}

export default WeatherApp;