import React  from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Search from './pages/Search';
import "./style.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/search" element = {<Search />}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
