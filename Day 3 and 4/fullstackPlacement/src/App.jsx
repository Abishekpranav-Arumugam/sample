import './App.css';
import ClassCompEg from "./Components/ClassComponents/ClassCompEg";
import Home from "./Components/FunctionalComponents/Home";
import About from "./Components/FunctionalComponents/About";
import Contact from "./Components/FunctionalComponents/Contact";
import Gallery from "./Components/FunctionalComponents/Gallery";
import NavBar from "./Components/FunctionalComponents/NavBar";
import "./assets/css/Home.css";
import "./assets/css/NavBar.css";
import "./Components/FunctionalComponents/UseEffect"
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UseEffect from './Components/FunctionalComponents/UseEffect';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={ <About college="Kongu" clg1="naturopathy" />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/use-effect" element={<UseEffect />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;