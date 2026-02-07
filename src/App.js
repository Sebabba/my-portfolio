import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Project from './pages/Project';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#faf9f5] dark:bg-[#1d1e20] text-[#2e2d25] dark:text-[#d4d4d4]">
      <NavBar />
      <div className="flex flex-col w-full md:max-w-screen-lg mx-auto px-4 md:px-12">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:slug" element={<Project />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
