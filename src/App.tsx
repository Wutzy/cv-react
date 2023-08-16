import React, { FunctionComponent } from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Menu from './components/menu/Menu';
import PageNotFound from './pages/Page-not-found';
import './style.css';


const App : FunctionComponent = () => {
  return (
    <Router>
      <div className="container row">
        <Menu />
        <div className="content col s5 m8 center">
          <Routes>
            <Route path = "/" element={<Home />}/>
            <Route path = "/knowledges" element={<Knowledges />}/>
            <Route path = "/portfolio" element={<Portfolio />}/>
            <Route path = "/contact" element={<Contact />}/>
            <Route path="*" element={<PageNotFound />} />
          </Routes>          
        </div>

      </div>
    </Router>


  );
}

export default App;
