import {combineReducers} from "redux";
import utilisateurReducer from "./utilisateur.reducer";
const rootReducer = combineReducers({
  utilisateurReducer,
});
export default rootReducer;
