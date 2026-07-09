import './App.css'
import Contact from './Components/Contact.jsx';
import Header from './Components/Header.jsx';
import Hero from './Components/Hero.jsx';
import ProjectDetails from './Components/ProjectDetails.jsx';
import Projects from './Components/Projects.jsx';
import Error404 from './Components/Error.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Education from './Components/Education.jsx';
import Achievements from './Components/Achievements';
import TestComp from './Components/TestComp.jsx';
import Experience from './Components/Experience.js';

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <About />
                <Experience />
                 <TestComp />
                <Education />
                <Projects />
                <Achievements />
                <Contact />
              </>
            }
          />
          <Route path="projects/:id" element={<ProjectDetails />} />
          <Route path="/testComp" element={<TestComp />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
