import Contact from "./contactUs";
import "./main.css"
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./footer";

import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <main>
          <Navbar/>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          </Routes>
          <Footer/>
        </main>
      </Router>
    </>
    
  );
}

export default App;


