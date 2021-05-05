import './App.css';
import Nav from './component/layout/nav/Nav';
import Header from './component/layout/header/Header';
import Anime from 'react-anime';





import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Header />
    
    </div>
  );
}

export default App;
