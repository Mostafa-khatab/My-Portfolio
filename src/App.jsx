import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./sections/Contact/Contact";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import AllProjects from "./sections/AllProjects/AllProjects";
import Skills from "./sections/Skills/Skills";
import Footer from "./sections/Footer/Footer";
import Navbar from "./sections/Navbar/Navbar";
import AboutMe from "./sections/AboutMe/AboutMe";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutMe />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}
