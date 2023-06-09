import "./styles.css";
import {  Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/service" element={<Service />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>

    </div>
  );
}
