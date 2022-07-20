import React from "react";
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <NavBar/>
            <AppRouter/>
        </div>
    </BrowserRouter>
  );
}

export default App;
