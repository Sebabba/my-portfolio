import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './components/homepage';
import EoloBlog from './components/eoloBlog';
import WeatherApp from './components/weatherApp';
import EoloSeo from './components/eoloSeo';
import Oneshot from './components/oneshot';
import SimpleFlanger from './components/simpleFlanger';
import NavBar from './components/navBar';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
    <Container className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/eolo-blog' element={<EoloBlog />} />
        <Route path='/weather-app' element={<WeatherApp />} />
        <Route path='/eolo-seo' element={<EoloSeo />} />
        <Route path='/oneshot' element={<Oneshot />} />
        <Route path='/simple-flanger' element={<SimpleFlanger />} />
      </Routes>
    </Container>
  </>
  );
}

export default App;
