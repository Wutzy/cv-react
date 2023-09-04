import React, { FunctionComponent } from 'react';
import Home from './pages/home/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Knowledges from './pages/knowledges/knowledges';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Menu from './components/menu/menu';
import PageNotFound from './pages/page-not-found';
import ProjectDetails from './pages/project-details/project-details';
import './style.css';



const App : FunctionComponent = () => {
  return (
    <Router>
      <div className="container">
        <Menu />
        <div className="content">
          <Routes>
            <Route path = "/cv-react/" element={<Home />}/>
            <Route path = "/knowledges" element={<Knowledges />}/>
            <Route path = "/portfolio" element={<Portfolio />}/>
            <Route path = "/portfolio/:id" element={<ProjectDetails />}/>
            <Route path = "/contact" element={<Contact />}/>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </Router>


  );
}

export default App;
