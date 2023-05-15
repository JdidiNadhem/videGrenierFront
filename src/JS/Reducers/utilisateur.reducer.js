
// InitialState

import { CLEAR_ERRORS, CURRENT_UTILISATEUR, FAIL_UTILISATEUR, LOAD_UTILISATEUR, LOGIN_UTILISATEUR } from "../Constants/utilisateur";

  
  const InitialState = {
    Utilisateur: null,
    load: false,
    isAuth: false,
    errors: [],
  };
  
  // PURE FUNCTION
  
  const utilisateurReducer = (state = InitialState, {type, payload}) => {
    switch (type) {
      case LOAD_UTILISATEUR:
        return {...state, load: true};
  
      case LOGIN_UTILISATEUR:
        localStorage.setItem("token", payload.token);
        return {
          ...state,
          Utilisateur: payload.user,
          load: false,
          isAuth: true,
          errors: [],
        };
    case CURRENT_UTILISATEUR:
        return {
          ...state,
          Utilisateur: payload,
          load: false,
          isAuth: true,
          errors: [],
        };
        case CLEAR_ERRORS:
        return {
          ...state,
          errors: [],
        };
      case FAIL_UTILISATEUR:
        return {
          ...state,
          load: false,
          errors: payload,
        };
  
      default:
        return state;
    }
  };
  
  export default utilisateurReducer;
  