import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

import Accueil from "./Pages/Accueil/Accueil";

import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import LandingPage from "./Components/Main/LandingPage";

import "./App.css";
// import { current_utilisateur } from "./JS/Actions/utilisateur.action";
// import { get_cateogries, get_produits } from "./JS/Actions/global";
import Navbar from "./Components/Navbar/Navbar";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

function App() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const token = localStorage.getItem("token");
  useEffect(() => {
    // if (token) {
    //   dispatch(current_utilisateur(navigate));
    // }
    // dispatch(get_cateogries());
    // dispatch(get_produits())
  }, [token]);

  return (
    <div classname="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* ======= Header ======= */}
              <Navbar />
              {/* End Header */}
              <Accueil />
            </>
          }
        >
          <Route path="" element={<LandingPage />} />
        </Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="inscription" element={<Register />}></Route>
        <Route path="product_details" element={
        

        
        <ProductDetails />
        
        
        
        } />
      </Routes>
    </div>
  );
}

export default App;
