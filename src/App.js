import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Project from './pages/Project';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
      <Container className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:slug" element={<Project />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
}

export default App;
