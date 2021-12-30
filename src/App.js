// import logo from './logo.svg';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

import React, { useState } from "react";
import Alert from "./components/Alert";

//router
// import { Route, Routes } from "react-router-dom";
// import TextForm from "./components/Textform";
// import { Route } from "react-router";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Has Been Enable", "success");
      document.title = "TextUtils - Dark Mode";
      // title Bilink
      // setInterval(() => {
      //   document.title = 'TextUtils - check first';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'TextUtils - check second';
      // }, 1500);
    } 
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LIght Mode Has Been Enable", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
     
        <Navbar title="TEXT CONVERTER" mode={mode} toggleMode={toggleMode} />
       
        <Alert alert={alert} />
        {/* <Routes>
          <Route exact path="/"  element={ */}
          <Textform  heading="Enter the text" mode={mode} />}
        {/* //   />
        //   <Route exact path="/about" element={<About />}/>
        // </Routes> */}
        
    </>
  );
}

export default App;
