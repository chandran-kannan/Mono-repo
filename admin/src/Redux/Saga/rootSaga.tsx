import { all } from "redux-saga/effects";
import { sampleWatcher } from "./sampleSaga";

export function* rootSaga() {
  yield all([sampleWatcher()]);
}
