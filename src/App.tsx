import './App.css'
import Contact from './Components/Contact.jsx';
import Header from './Components/Header.jsx';
import Hero from './Components/Hero.jsx';
import Projects from './Components/Projects.jsx';
import Error404 from './Components/Error.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import { Education } from './Components/Education';
import Achievements from './Components/Achievements';
import { TestComp } from './Components/TestComp';
import Experience from './Components/Experience.js';
import Skills from './Components/Skills';
import { Footer } from './Components/Footer.js';

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
                <Education />
                <Projects />
                <Skills />
                <Achievements />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/testComp" element={<TestComp />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
