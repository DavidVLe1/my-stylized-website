import Navbar from "./Components/Navbar";
import MainPage from "./Components/MainPage";
import AboutCarousel from "./Components/AboutCarousel";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";

import { Form } from "react-bootstrap";


function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <AboutCarousel />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
