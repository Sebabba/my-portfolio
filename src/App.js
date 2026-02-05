import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Project from './pages/Project';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="flex flex-col w-full md:max-w-screen-lg mx-auto px-6 md:px-8">
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:slug" element={<Project />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
