import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>{<Home />}</div>}>
          <Route path="/about" element={<div>{<About />}</div>} />
          <Route path="/contact" element={<div>{<Contact />}</div>} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
