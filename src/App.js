import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Service from "./Components/Service"
import About from "./Components/About"
import Product from "./Components/Product"
import Blog from "./Components/Blog"
import Newsletter from "./Components/Newsletter";
import MyFooter from "./Components/MyFooter"
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Home/>
       <Service/>
       <About/>
       <Product/>
       <Blog/>
       <Newsletter/>
       <MyFooter/>
    </div>
  );
}

export default App;
