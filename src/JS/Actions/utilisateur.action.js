import axios from "axios";

import {
  CLEAR_ERRORS,
  CURRENT_UTILISATEUR,
  FAIL_UTILISATEUR,
  LOAD_UTILISATEUR,
  LOGIN_UTILISATEUR,
} from "../Constants/utilisateur";
import {
  FAIL_PRODUIT,
  LOAD_PRODUIT,
  GET_PRODUITS,
  GET_PRODUIT
} from "../Constants/produits";

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
export const get_gategories = (navigate) => async (dispatch) => {
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

// Add product
export const add_product = (
  { nom_produit, prix, description, image }
) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUIT });
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("token"),
      },
    };
     await axios.post(
      "/api/product/add/:idCategorie",
      { nom_produit, prix, description, image },
      config
    );
    dispatch(get_products(-1,-1,-1))
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_PRODUIT, payload: error.response.data.errors });
  }
};

// Delete product
export const delete_product = (productId) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUIT });
  try {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    await axios.delete(`/api/product/${productId}`, config);
    
    dispatch(get_products(-1,-1,-1))

  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_PRODUIT, payload: error.response.data.errors });
  }
};

export const get_products = (minPrice, maxPrice, categorie) => async (
  dispatch
) => {
  dispatch({ type: LOAD_PRODUIT });
  try {
    const result = await axios.get(
      `/api/products/${categorie}/${minPrice}/${maxPrice}`
    );
    dispatch({ type: GET_PRODUITS, payload: result.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_PRODUIT, payload: error.response.data.errors });
  }
};

// Get product by id
export const get_product_by_id = (productId) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUIT });
  try {
    const result = await axios.get(`/api/product/${productId}`); //produit msg
    dispatch({ type: GET_PRODUIT, payload: result.data });
    dispatch()
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_PRODUIT, payload: error.response.data.errors });
  }
};

// Get current utilisateur
export const current_utilisateur = () => async (dispatch) => {
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
