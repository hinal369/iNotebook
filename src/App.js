import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout( () => {
      setAlert(null);
    }, 1500)
  }

  return (
    <NoteState>
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Alert alert={alert} />
            <div className="container my-3">
              <Routes>
                <Route index element={<Home showAlert={showAlert} />} />
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login showAlert={showAlert} />}  />
                <Route path="signup" element={<Signup showAlert={showAlert} />}  />
              </Routes>
            </div>
        </div>
        </BrowserRouter>
      </NoteState>
  );
}

export default App;
