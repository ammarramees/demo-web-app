import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import "./App.css";
import Home2 from "./Pages/Home/Home2";
import HomeSir from "./Pages/Home/HomeSir";
import Navbar from "./Components/Navigation/Navbar";
import { Route, Routes, Link } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div>
      {/* <h1 className="h1">Hello Ammar Ramees</h1>
      <Home2 /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;