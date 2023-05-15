import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";

import Accueil from "./Pages/Accueil/Accueil";

import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import LandingPage from "./Components/Main/LandingPage";

import "./App.css";
import { current_utilisateur } from "./JS/Actions/utilisateur.action";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(current_utilisateur(navigate));
    }
  }, [token]);

  return (
    <div classname="App">
      <Routes>
        <Route path="/" element={<Accueil />}>
          <Route path="" element={<LandingPage />} />
        </Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="inscription" element={<Register />}></Route>
      </Routes>
      {/* <Accueil /> */}
    </div>
  );
}

export default App;
