import axios from 'axios'


import {
  FAIL_CATEGORIE,
  GET_CATREGORIES,
  LOAD_CATEGORIE,
} from "../Constants/categories";
import { FAIL_PRODUIT, GET_PRODUITS, LOAD_PRODUIT } from '../Constants/produits';


// Get categories
export const get_cateogries = () => async (dispatch) => {
  dispatch({ type: LOAD_CATEGORIE });
  try {
    const result = await axios.get(`/api/global/get_categories`);

    dispatch({ type: GET_CATREGORIES, payload: result.data }); //categories (res)
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_CATEGORIE, payload: error.response.data.errors });
  }
};


// Get categories
export const get_produits = () => async (dispatch) => {
  dispatch({ type: LOAD_PRODUIT });
  try {
    const result = await axios.get(`/api/global/get_produits`);

    dispatch({ type: GET_PRODUITS, payload: result.data }); //produits (res)
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_PRODUIT, payload: error.response.data.errors });
  }
};

