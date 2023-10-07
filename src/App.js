import './App.css';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Hero from './Components/Hero';
import ProjectDetails from './Components/ProjectDetails';
import Projects from './Components/Projects';
import Error404 from './Components/Error';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Components/About';
import Education from './Components/Education';
import Achievements from './Components/Achievements';

function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element=
        {  <>   
          <Header/>
          <Hero/>
          <About/>
          <Education/>
          <Projects/>
          <Achievements/>
          <Contact/>
          </> 
          } 
          />
        <Route path="projects/:id" element={<ProjectDetails />} />
        <Route path="*" element={<Error404/>} />

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
