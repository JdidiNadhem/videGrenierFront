import { combineReducers } from "redux";
import utilisateurReducer from "./utilisateur.reducer";
import categorieReducer from "./categorie.reducer";
import produitReducer from "./produit.reducer";
const rootReducer = combineReducers({
  utilisateurReducer,
  categorieReducer,
  produitReducer,
});
export default rootReducer;
