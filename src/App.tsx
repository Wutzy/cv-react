import React, { FunctionComponent } from 'react';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Knowledges from './pages/knowledges';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Menu from './components/Menu';
import PageNotFound from './pages/page-not-found';


const App : FunctionComponent = () => {
  return (
    <Router>
      <div className="container row">
        <Menu />
        <div className="content col s5 m7">
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
