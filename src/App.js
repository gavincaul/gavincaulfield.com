import './App.css';
import Home from './pages/Home.js'
import About from './pages/About.js'
import Experience from './pages/Experience.js'
import Project from './pages/ProjectPage.js'
import Skills from './pages/SkillsPage.js'
import Resume from './pages/Resume.js'
import Stamps from './pages/Stamps.js'
import AccoladesPage from './pages/AccoladesPage.js';
import Playground from './pages/Playground.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/experience" element={<Experience />}/>
          <Route exact path="/experience/:id" element={<Project />} />
          <Route exact path="/experience/skills" element={<Skills />} />
          <Route exact path="/experience/skills/:id" element={<Skills />} />
          <Route exact path="/experience/accolades" element={<AccoladesPage />} />
          <Route exact path="/stamps" element={<Stamps />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/admin/playground" element={<Playground />} />
          <Route exact path="*" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;