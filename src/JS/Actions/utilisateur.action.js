import axios from "axios";

import {
  CLEAR_ERRORS,
  CURRENT_UTILISATEUR,
  FAIL_UTILISATEUR,
  LOAD_UTILISATEUR,
  LOGIN_UTILISATEUR,
} from "../Constants/utilisateur";

// Login and Get utilisateur
export const login_utilisateur = (
  { nomUtilisateur, motDePasse },
  navigate
) => async (dispatch) => {
  dispatch({ type: LOAD_UTILISATEUR });
  try {
    const result = await axios.post(`/api/utilisateur/login`, {
      nomUtilisateur,
      motDePasse,
    });

    dispatch({ type: LOGIN_UTILISATEUR, payload: result.data }); //msg Utilisateur token

    navigate("/");
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_UTILISATEUR, payload: error.response.data.errors });
  }
};

// Login and Get utilisateur
export const register_utilisateur = (
  { nom, prenom, nomUtilisateur, motDePasse, reMotDePasse },
  navigate
) => async (dispatch) => {
  dispatch({ type: LOAD_UTILISATEUR });
  try {
     await axios.post(`/api/utilisateur/register`, {
      nom,
      prenom,
      nomUtilisateur,
      motDePasse,
      reMotDePasse,
    });

    dispatch({ type: CLEAR_ERRORS }); //msg Utilisateur token

    navigate("/login");
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_UTILISATEUR, payload: error.response.data.errors });
  }
};

// Get current utilisateur
export const current_utilisateur = (navigate) => async (dispatch) => {
  dispatch({ type: LOAD_UTILISATEUR });
  try {
    const config = {
      headers: { Authorization: localStorage.getItem("token") },
    };

    const result = await axios.get(`/api/utilisateur/current`, config);

    dispatch({ type: CURRENT_UTILISATEUR, payload: result.data }); //Utilisateur (res)

  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_UTILISATEUR, payload: error.response.data.errors });
  }
};
