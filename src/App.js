import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from "./components/Alert";

function App() {
  return (
    <NoteState>
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Alert />
            <div className="container my-3">
              <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
              </Routes>
            </div>
        </div>
        </BrowserRouter>
      </NoteState>
  );
}

export default App;
