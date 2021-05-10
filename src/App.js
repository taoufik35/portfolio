import './App.css';
import Nav from './component/layout/nav/Nav';
import Header from './component/layout/header/Header';
import Biographie from './component/biographie/Biographie';
import Contact from './component/contact/Contact';
import Projet from './component/projet/Projet';
import Accueil from './component/accueil/Acceuil';
import Footer from './component/layout/footer/Footer';









import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Nav />
      <Header />
      <Switch>
            <Route path="/biographie">
              <Biographie />
            </Route>
            <Route path="/projet">
              <Projet/>
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
               <Route path="/">
          <Accueil />  
            </Route>
          </Switch>
          <Footer />
    </Router>
    </div>
  );
}

export default App;
