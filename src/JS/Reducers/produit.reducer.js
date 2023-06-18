import {
  FAIL_PRODUIT,
  GET_PRODUITS,
  GET_PRODUIT,
  LOAD_PRODUIT,
} from "../Constants/produits";

// InitialState
const InitialState = {
  Produits: [],
  Produit:null,
  load: false,
  errors: [],
};

// PURE FUNCTION

const produitReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case LOAD_PRODUIT:
      return { ...state, load: true };

    case GET_PRODUITS:
      return {
        ...state,
        Produits: payload.produits,
        load: false,
        errors: [],
      };

      case GET_PRODUIT:
      return {
        ...state,
        Produit: payload.produit,
        load: false,
        errors: [],
      };


    case FAIL_PRODUIT:
      return {
        ...state,
        load: false,
        errors: payload,
      };

    default:
      return state;
  }
};

export default produitReducer;
