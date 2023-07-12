import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //To Enable or Disable DarkMode
  const [alert, setAlert] = useState(null); //To show Alerts

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#585858';
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>

      <BrowserRouter>
        <Navbar title="Text it Out!" link1="Home" link2="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route
              exact path="/"
              element={
                <TextForm heading="Enter Text Below:" mode={mode} showAlert={showAlert} />
              }
            />
            <Route exact path="/about" element= {
            <About mode={mode} title= "Text it Out!" description= "which lets you to modify / edit / manipulate your text." /> 
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
