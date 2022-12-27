import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";

const rootReducer = combineReducers({
  sample: sampleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
