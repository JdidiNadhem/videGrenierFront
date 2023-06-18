import {
  FAIL_CATEGORIE,
  GET_CATREGORIES,
  LOAD_CATEGORIE,
} from "../Constants/categories";

// InitialState
const InitialState = {
  Categories: [],
  load: false,
  errors: [],
};

// PURE FUNCTION

const categorieReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case LOAD_CATEGORIE:
      return { ...state, load: true };

    case GET_CATREGORIES:
      return {
        ...state,
        Categories: payload.categories,
        load: false,
        errors: [],
      };

    case FAIL_CATEGORIE:
      return {
        ...state,
        load: false,
        errors: payload,
      };

    default:
      return state;
  }
};

export default categorieReducer;
